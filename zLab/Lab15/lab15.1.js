import { createStore } from 'redux';

const reducer = (state = 5) => {
  return state;
};
let store = createStore(reducer);
// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
