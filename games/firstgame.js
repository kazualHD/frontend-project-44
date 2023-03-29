import readlineSync from 'readline-sync';
import username from '../src/index.js';
import { CheckCorrectAnwer } from '../src/index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
let score = 0;
let CorrectAnswer = '';
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (mainnumber) => mainnumber % 2 === 0;
const CorrectYes = (mainnumber, firstanswer) => isEven(mainnumber) && firstanswer === 'yes' || !isEven(mainnumber) && firstanswer === 'no';
while (score < 3 ) {
  const mainnumber = getRandomInt(50);
  console.log(`Question: ${mainnumber}`);
  const firstanswer = readlineSync.question('Your answer: ');
  const rValue = CheckCorrectAnwer(isEven, mainnumber);
  if (!CorrectYes(mainnumber, firstanswer)) {
    console.log(`'${firstanswer}' is wrong answer. Correct answer was '${rValue}'. Let's try again, ${username}!`);
    break;
  }
  console.log('Correct!');
  score += 1;
  if (score === 3) {
    console.log(`Congratulations, ${username}!`);
    break;
  }
  }
 

export default CorrectYes;
