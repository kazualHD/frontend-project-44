import readlineSync from 'readline-sync';
import username from '../src/index.js'
console.log('What number is missing in the progression?');
let score = 0;
const stack = [];
while (score < 3) {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const step = getRandomInt(4, 10);
  const start = getRandomInt(3, 15);
  for (let i = start; i < 65; i += step) {
    stack.push(i);
  }
  const randItem = stack[Math.floor(Math.random() * stack.length)];
  const index = stack.indexOf(randItem);
  
  if (index !== -1) {
    stack[index] = '..';
  }
  const str = stack.join(' ');
  console.log(`Question: ${str}`);
  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  if (userAnswer !== randItem) {
    console.log(`'${userAnswer}' is wrong answer. Correct answer was '${randItem}'. Let's try again, ${username}! `);
    break;
  } else if (userAnswer === randItem) {
    stack.length = 0;
    score += 1;
    console.log('Correct!');
  }
 if (score === 3)  {
  console.log(`Congratulations, ${username}!`);
 }
}
export default stack;
