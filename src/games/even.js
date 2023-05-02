import wrapper from '../index.js';
import getRandomInRange from '../utils.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomInRange(1, 100);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => wrapper(taskDescription, generateRound);
