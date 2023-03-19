/* -*- indent-tabs-mode: nil; tab-width: 2; -*-*/
/* vim: set ts=2 sw=2 et ai : */

const calculator = document.getElementById('calculator');
const inputs = calculator.querySelectorAll('input[type="number"]');
const calculateButton = document.getElementById('calculate');
const resultInput = document.getElementById('result');
calculateButton.addEventListener('click', () => {
  let result = 0;
  for (const input of inputs) {
    result += Number(input.value) / Number(input.dataset.equivalentDose) * 100;
  }
  resultInput.value = result;
});
