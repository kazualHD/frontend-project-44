/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);
let CorrectAnswer = '';
export const CheckCorrectAnwer = (func, mainnumber) => {
  if (func(mainnumber) === true) {
    CorrectAnswer = 'yes';
  } else if (func(mainnumber) !== true) {
    CorrectAnswer = 'no';
  }
  return CorrectAnswer;
};
export const check = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};
export default username;
