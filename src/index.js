require('./index.js')

// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

// console.log($);

console.log("this is not functional");

// function for change state
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// function for storing state - WIP
const storeState = () => { // outer function is stored in the constant & will store the 'currentState' of an 'object'- it does not take an argument.
  let currentState = {}; // of an object will be initialized as a {hash} - we use 'let' because it will be mutated each time the inner function is called.
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState(); // state control holds the value of lines 25 - 28