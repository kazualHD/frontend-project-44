import wrapper from '../index.js';
import getRandomInRange from '../utils.js';

const taskDecription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const firstNum = getRandomInRange(1, 40);
  const secondNum = getRandomInRange(1, 35);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(getGcd(firstNum, secondNum));
  return [question, answer];
};

export default () => wrapper(taskDecription, generateRound);