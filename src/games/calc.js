import wrapper from '../index.js';
import getRandomInRange from '../utils.js';

const taskDesription = 'What is the result of the expression?';

const getOperator = () => {
  const randomoperations = ['+', '-', '*'];
  return randomoperations[getRandomInRange(0, randomoperations.length)];
};

const calc = (firstNum, secondNum, Operator) => {
  switch (Operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default: throw new Error(`Operator ${Operator} - is invalid`);
  }
};

const generateRound = () => {
  const firstNum = getRandomInRange(0, 15);
  const secondNum = getRandomInRange(0, 10);
  const randomOperator = getOperator();
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const answer = String(calc(firstNum, secondNum, randomOperator));
  return [question, answer];
};

export default () => wrapper(taskDesription, generateRound);
