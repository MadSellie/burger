const redux = require('redux');
const initialState = {
  counter: 0
};

const rootReducer = (state=initialState, action) => {
  if(action.type === 'INC_COUNT') {
    return {...state, counter: state.counter + 1};
  }
  if(action.type === 'ADD_COUNT') {
    return {...state, counter: state.counter + action.value};
  }
  
  return state;
};

const store = redux.createStore(rootReducer);

store.subscribe(() => {
  console.log('[Subscription]:', store.getState());
});

console.log('before: ', store.getState());

store.dispatch({type: 'INC_COUNT'});
store.dispatch({type: 'ADD_COUNT', value: 10});

console.log('after: ', store.getState());