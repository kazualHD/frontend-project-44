const getRandomInRange = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
};
export default getRandomInRange;

export const generateQuestionAndAnswer = (min, max, checkFunction) => {
  const num = getRandomInRange(min, max);
  const question = String(num);
  const answer = checkFunction(num) ? 'yes' : 'no';
  return [question, answer];
};
