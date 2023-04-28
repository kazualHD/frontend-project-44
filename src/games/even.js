import wrapper from '../index.js';
import { generateEvenRound } from '../utils.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => wrapper(taskDescription, generateEvenRound);

