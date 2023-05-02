import wrapper from '../index.js';
import { generateQuestionAndAnswer } from '../utils.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => generateQuestionAndAnswer(2, 100, isPrime);

export default () => wrapper(taskDescription, generateRound);
