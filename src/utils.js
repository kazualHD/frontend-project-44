const getRandomInRange = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
};
export default getRandomInRange;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const generatePrimeRound = () => {
  const num = getRandomInRange(2, 100);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};
const isEven = (num) => num % 2 === 0;
export const generateEvenRound = () => {
  const num = getRandomInRange(1, 100);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};
