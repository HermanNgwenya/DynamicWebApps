const MAX_NUMBER = 15
const MIN_NUMBER = -5

const number = document.querySelector ('[data-key="number"]')
const subtract =  document.querySelector ('[data-key="subtract"]')
const add =  document.querySelector ('[data-key="add"]')
const refresh = document.querySelector ('[variant="primary"]')

const subtractHandler = () => {
    const newValue = parseInt(number.value) - 1
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue

    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    }
}

const refreshHandler = () => {
    number.value = 0;
    add.disabled = false;
    subtract.disabled = false;
    showMessage("The counter has been reset");
    
}

const showMessage = (message) => {
    alert(message);
    message.disabled = false
    
  };

subtractHandler()
addHandler()
refreshHandler()


subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler )

refresh.addEventListener('click',refreshHandler)

// addEventListener('click', showMessage)