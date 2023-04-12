import wrapper from '../index.js';
import getRandomInRange from '../utils.js';

const taskDescription = 'What number is missing in the progression?';

const getProgression = (num, length, randomStep) => {
  const result = [];
  for (let i = num; result.length <= length; i += randomStep) {
    result.push(String(i));
  }
  return result;
};

const generateRound = () => {
  const randomStep = getRandomInRange(1, 5);
  const firstNum = getRandomInRange(1, 15);
  const secondNum = getRandomInRange(5, 10);
  const result = getProgression(firstNum, secondNum, randomStep);
  const randomQuestionIndex = getRandomInRange(0, result.length);
  const answer = String(result[randomQuestionIndex]);
  result[randomQuestionIndex] = '..';
  const question = result.join(' ');
  return [question, answer];
};

export default () => wrapper(taskDescription, generateRound);