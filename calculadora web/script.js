const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('[data-op]');

function parseValue(input) {
  const value = parseFloat(input.value);
  return Number.isNaN(value) ? 0 : value;
}

function calculate(operation) {
  const a = parseValue(number1);
  const b = parseValue(number2);
  let output = 0;

  switch (operation) {
    case 'add':
      output = a + b;
      break;
    case 'subtract':
      output = a - b;
      break;
    case 'multiply':
      output = a * b;
      break;
    case 'divide':
      output = b === 0 ? 'No válido' : a / b;
      break;
    case 'power':
      output = Math.pow(a, b);
      break;
  }

  result.textContent = output;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    calculate(button.dataset.op);
  });
});
