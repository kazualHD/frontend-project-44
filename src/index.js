import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);
let CorrectAnswer = '';
export const CheckCorrectAnwer = (func, mainnumber) => {
  if (func(mainnumber) === true) {
    CorrectAnswer = 'yes';
} else if (func(mainnumber) !== true ) {
    CorrectAnswer = 'no';
}
  return CorrectAnswer;
}
export default username;