const {
  createAction,
  nanoid,
  createReducer,
  configureStore,
  getDefaultMiddleware,
} = require('@reduxjs/toolkit');
const logger = require('redux-logger').createLogger();
//Initial State

const initialsState = {
  counter: 0,
};

//createAction
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const resetCounter = createAction('RESET');
//customize createAction
const incrementBy = createAction('INCREMENT_BY', (amount) => {
  return {
    payload: {
      amount,
    },
  };
});
console.log(incrementBy(20, 'Emma'));

//createReducer
//1. Builder callback notation
//2. map object notation

//builder callback notation
const counterSlice = createReducer(initialsState, (builder) => {
  //increment
  builder.addCase(increment, (state) => {
    state.counter += 1;
  });

  //decrement
  builder.addCase(decrement, (state) => {
    state.counter -= 1;
  });
  //reset
  builder.addCase(resetCounter, (state) => {
    state.counter = 0;
  });
  //increment by
  builder.addCase(incrementBy, (state, action) => {
    state.counter += action.payload.amount;
  });
});

// createAction(initialsState, {
//   [increment]: (state) => {
//     state.counter += 1;
//   },
//   //decrement
//   [decrement]: (state) => {
//     state.counter -= 1;
//   },
//   //reset
//   [resetCounter]: (state) => {
//     state.counter = 0;
//   },
//   //increment by
//   [incrementBy]: (state, action) => {
//     state.counter = state.counter.amount;
//   },
// });

//Store
const store = configureStore({
  reducer: counterSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//dispatch action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementBy(100));

console.log(store.getState());
