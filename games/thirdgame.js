import readlineSync from 'readline-sync';

let score = 0;
// eslint-disable-next-line import/no-mutable-exports
let correctAnswer = '';
console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);
while (score < 3) {
  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  console.log('Find the greatest common divisor of given numbers');
  console.log(`Question: ${num1} ${num2}`);
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  correctAnswer = num1 + num2;
  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  if (correctAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'. Let's try again, ${username}!`);
    console.log(`Let's try again, ${username}!`);
    break;
  }
  score += 1;
  console.log('Correct!');
}
if (score === 3) {
  console.log(`Congratulations, ${username}!`);
}
export default correctAnswer;
