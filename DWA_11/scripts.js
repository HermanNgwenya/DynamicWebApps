import { legacy_createStore as createStore } from 'redux';

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'RESET':
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const refresh = document.querySelector('[variant="primary"]');

const subtractHandler = () => {
  store.dispatch({ type: 'DECREMENT' });
};

const addHandler = () => {
  store.dispatch({ type: 'INCREMENT' });
};

const refreshHandler = () => {
  store.dispatch({ type: 'RESET' });
};

const updateCounter = () => {
  const state = store.getState();
  number.value = state.counter;

  subtract.disabled = state.counter <= MIN_NUMBER;
  add.disabled = state.counter >= MAX_NUMBER;
};

store.subscribe(updateCounter);

updateCounter();

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
refresh.addEventListener('click', refreshHandler);
