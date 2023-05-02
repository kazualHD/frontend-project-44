import wrapper from '../index.js';
import getRandomInRange from '../utils.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let result;
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
    result = true;
  }
  return result;
};

const generateRound = () => {
  const num = getRandomInRange(2, 100);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};
export default () => wrapper(taskDescription, generateRound);
