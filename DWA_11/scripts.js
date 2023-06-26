// const MAX_NUMBER = 15
// const MIN_NUMBER = -5

// const number = document.querySelector ('[data-key="number"]')
// const subtract =  document.querySelector ('[data-key="subtract"]')
// const add =  document.querySelector ('[data-key="add"]')
// const refresh = document.querySelector ('[variant="primary"]')

// const subtractHandler = () => {
//     const newValue = parseInt(number.value) - 1
//     number.value = newValue

//     if (add.disabled === true) {
//         add.disabled = false
//     }

//     if (newValue <= MIN_NUMBER) {
//         subtract.disabled = true
//     }
// }

// const addHandler = () => {
//     const newValue = parseInt(number.value) + 1
//     number.value = newValue

//     if (subtract.disabled === true) {
//         subtract.disabled = false
//     }

//     if (newValue >= MAX_NUMBER) {
//         add.disabled = true
//     }
// }

// const refreshHandler = () => {
//     number.value = 0;
//     add.disabled = false;
//     subtract.disabled = false;
//     showMessage("The counter has been reset");
    
// }

// const showMessage = (message) => {
//     alert(message);
//     message.disabled = false
    
//   };

// subtractHandler()
// addHandler()
// refreshHandler()


// subtract.addEventListener('click', subtractHandler)

// add.addEventListener('click', addHandler )

// refresh.addEventListener('click',refreshHandler)

// addEventListener('click', showMessage)


import { createStore } from 'redux';

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
