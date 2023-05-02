import wrapper from '../index.js';
import { generateQuestionAndAnswer } from '../utils.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateRound2 = () => generateQuestionAndAnswer(1, 100, isEven);
export default () => wrapper(taskDescription, generateRound2);
