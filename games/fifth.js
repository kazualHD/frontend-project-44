/* eslint-disable import/no-duplicates */
import readlineSync from 'readline-sync';
import username from './.src/index.js';
import { CheckCorrectAnwer } from './.src/index.js';

let score = 0;
const isNatural = (randValue) => {
  for (let i = 2; i <= randValue / 2; i += 1) {
    if (randValue % i === 0) {
      return false;
    }
  }
  return true;
};
// eslint-disable-next-line no-mixed-operators
const CorrectNo = (rValue, userAnswer) => rValue === 'yes' && userAnswer === 'yes' || rValue === 'no' && userAnswer === 'no';
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
while (score < 3) {
  const randValue = Math.floor(Math.random() * 200);
  console.log(`Question: ${randValue}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rValue = CheckCorrectAnwer(isNatural, randValue);
  if (!CorrectNo(rValue, userAnswer)) {
    console.log(`'${userAnswer}' is wrong answer. Correct answer was '${rValue}'. Let's try again, ${username}!`);
    break;
  }
  console.log('Correct!');
  score += 1;
  if (score === 3) {
    console.log(`Congratulations, ${username}!`);
    break;
  }
}
export default CorrectNo;
