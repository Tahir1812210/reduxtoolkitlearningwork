const { createSlice, configureStore } = require('@reduxjs/toolkit');

//initialState
const initialState = {
  counter: 0,
};

//createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //increment
    increment: (state) => {
      state.counter += 1;
    },
    //decrement
    decrement: (state, action) => {
      state.counter -= 1;
    },
    //reset
    reset: (state, action) => {
      state.counter = 0;
    },

    incrementByAmount: (state, action) => {
      state.counter = action.payload;
    },
  },
});

//Generate Actions
const { decrement, increment, reset, incrementByAmount } = counterSlice.actions;

//Generate Reducer
const counterReducer = counterSlice.reducer;

const store = configureStore({
  reducer: counterReducer,
});

//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(200));
store.dispatch(reset());

console.log(store.getState());
