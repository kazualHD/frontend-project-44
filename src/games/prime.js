import wrapper from '../index.js';
import { generatePrimeRound } from '../utils.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => wrapper(taskDescription, generatePrimeRound);
