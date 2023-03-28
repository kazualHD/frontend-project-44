import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);
const getRandomInt = (max) => Math.floor(Math.random() * max);
let score = 0;
let CorrectAnswer = '';
console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
const isEven = (mainnumber) => mainnumber % 2 === 0;
// eslint-disable-next-line no-mixed-operators
const CorrectYes = (mainnumber, firstanswer) => isEven(mainnumber) && firstanswer === 'yes' || !isEven(mainnumber) && firstanswer === 'no';
// eslint-disable-next-line no-constant-condition
while (true) {
  const mainnumber = getRandomInt(50);
  console.log(`Question: ${mainnumber}`);
  const firstanswer = readlineSync.question('Your answer: ');
  if (isEven(mainnumber) === true) {
    CorrectAnswer = 'yes';
  } else if (isEven(mainnumber) === false) {
    CorrectAnswer = 'no';
  }
  if (!CorrectYes(mainnumber, firstanswer)) {
    console.log(`'${firstanswer}' is wrong answer. Correct answer was '${CorrectAnswer}'.  Let's try again, ${username}!`);
    break;
  }
  console.log('Correct!');
  score += 1;
  if (score === 3) {
    console.log(`Congratulations, ${username}!`);
    break;
  }
}
export default CorrectYes;
