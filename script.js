let string = "";
let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.button1');

function add() {
  let operands = string.split('+');
  console.log(operands);  
  let result = parseFloat(operands[0]);
  for (let i = 1; i < operands.length; i++) {
    result += parseFloat(operands[i]);
  }
  console.log(result);
  return result;
  
}

function subtract() {
  let operands = string.split('-');
  let result = parseFloat(operands[0]);
  for (let i = 1; i < operands.length; i++) {
    result -= parseFloat(operands[i]);
  }
  return result;
}

function multiply() {
  let operands = string.split('*');
  let result = parseFloat(operands[0]);
  for (let i = 1; i < operands.length; i++) {
    result *= parseFloat(operands[i]);
  }
  return result;
}

function divide() {
  let operands = string.split('/');
  let result = parseFloat(operands[0]);
  for (let i = 1; i < operands.length; i++) {
    const operand = parseFloat(operands[i]);
    if (operand === 0) {
      window.alert('Cant divide by Zero.');
    }
    result /= operand;
  }
  return result;
}

function resetInputField() {
  inputField.classList.remove('error');
}

function displayError(errorMessage) {
  inputField.classList.add('error');
  inputField.value = window.alert(errorMessage);
}

Array.from(buttons).forEach((button1) => {
  button1.addEventListener('click', (e) => {
    let input = e.target.innerHTML;
    
    if (input === '=') {
      let result;
      try {
        if (string === '') {
          result = 0;
        } else if (string.includes('+')) {
          result = add();
        } else if (string.includes('-')) {
          result = subtract();
        } else if (string.includes('*')) {
          result = multiply();
        } else if (string.includes('/')) {
          result = divide();
        } else {
          string= "";
        }
        if (!Number.isFinite(result)) {
         result = "";
         string = result;
        }
        inputField.classList.remove('error');
        inputField.value = result;
        string = result.toString();
      } catch (error) {
        displayError(error.message);
        string = "";
      }
    } else if (input === 'C') {
      string = "";
      inputField.classList.remove('error');
      inputField.value = "";
    } else {
      resetInputField();
      string += input;
      inputField.value = string;
    }
  });
});