// import { legacy_createStore as createStore } from 'redux';

// const MAX_NUMBER = 15;
// const MIN_NUMBER = -5;

// const initialState = {
//   counter: 0
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, counter: state.counter + 1 };
//     case 'DECREMENT':
//       return { ...state, counter: state.counter - 1 };
//     case 'RESET':
//       return { ...state, counter: 0 };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// const number = document.querySelector('[data-key="number"]');
// const subtract = document.querySelector('[data-key="subtract"]');
// const add = document.querySelector('[data-key="add"]');
// const refresh = document.querySelector('[variant="primary"]');

// const subtractHandler = () => {
//   store.dispatch({ type: 'DECREMENT' });
// };

// const addHandler = () => {
//   store.dispatch({ type: 'INCREMENT' });
// };

// const refreshHandler = () => {
//   store.dispatch({ type: 'RESET' });
// };

// const updateCounter = () => {
//   const state = store.getState();
//   number.value = state.counter;

//   subtract.disabled = state.counter <= MIN_NUMBER;
//   add.disabled = state.counter >= MAX_NUMBER;
// };

// store.subscribe(updateCounter);

// updateCounter();

// subtract.addEventListener('click', subtractHandler);
// add.addEventListener('click', addHandler);
// refresh.addEventListener('click', refreshHandler);

/**
  * Maximum allowed number.
  * @constant {number}
  */
 const MAX_NUMBER = 15;
/**
 * Minimum allowed number.
 * @constant {number}
 */
const MIN_NUMBER = -5;
/**
 * The number input element.
 * @type {HTMLInputElement}
 *
 */
const STEP_AMOUNT = 1;
/**
 * The number input element.
 * @type {HTMLInputElement}
 *
 */
const ActionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT : "DECREMENT",
    RESET: "RESET",
};
//action creators
function incrementCounter() {
return { type: ActionTypes.INCREMENT };
}
function decrementCounter() {
    return { type: ActionTypes.DECREMENT };
}
function resetCounter() {
    return { type: ActionTypes.RESET};
}
//define reducer function
function counterReducer(state = 0,action) {
    switch(action.type) {
        case ActionTypes.INCREMENT: return state + STEP_AMOUNT;
        case ActionTypes.DECREMENT: return state - STEP_AMOUNT;
        case ActionTypes.RESET:return 0;
            default:
            return state;
    }
}
//Redux store
const store = Redux.createStore(counterReducer);
//update UI
let currentValue = store.getState();
function updateUI() {
    currentValue = store.getState();
    number.value = currentValue.toString();
    if(currentValue <= MIN_NUMBER){
        subtract.disabled = true;
    } else if(currentValue >= MAX_NUMBER) {
        add.disabled = true
    } else {
        subtract.disabled = false;
        add.disabled =false;
    }
    console.log(currentValue)
}
// subscribe to state and update
store.subscribe(updateUI);
const number = document.querySelector('[data-key="number"]')
/**
 * The subtract button element.
 * @type {HTMLButtonElement}
 */
const subtract = document.querySelector('[variant="danger"]')
/**
 * The add button element.
 * @type {HTMLButtonElement}
 */
const add = document.querySelector('[variant="success"]')
const reset = document.querySelector('[variant="default"]')
subtract.addEventListener("click",() => {
    store.dispatch(decrementCounter());
});
add.addEventListener("click",() => {
    store.dispatch(incrementCounter());
});
reset.addEventListener("click",() => {
    store.dispatch(resetCounter());
    alert("The reset button has been pressed");
});
//initialize UI
updateUI();