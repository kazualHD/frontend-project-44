/* eslint-disable import/no-duplicates */
import readlineSync from 'readline-sync';
import username from '../src/index.js';
import { check } from '../src/index.js';

let score = 0;
const correctAnswer = '';
while (score < 3) {
  // eslint-disable-next-line prefer-const
  let num1 = Math.floor(Math.random() * 100);
  // eslint-disable-next-line prefer-const
  let num2 = Math.floor(Math.random() * 100);
  console.log('Find the greatest common divisor of given numbers');
  console.log(`Question: ${num1} ${num2}`);
  const result = check(num1, num2);
  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  if (check(num1, num2) !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer. Correct answer was '${result}'. Let's try again, ${username}!`);
    break;
  }
  score += 1;
  console.log('Correct!');
  if (score === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
export default correctAnswer;
