import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
let score = 0;
const stack = [];

while (score < 3) {
  const getRandomInt = (min, max) => {
    // eslint-disable-next-line no-param-reassign
    min = Math.ceil(min);
    // eslint-disable-next-line no-param-reassign
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const step = getRandomInt(4, 10);
  const start = getRandomInt(3, 15);
  for (let i = start; i < 65; i += step) {
    stack.push(i);
  }
  const randItem = stack[Math.floor(Math.random() * stack.length)];
  const index = stack.indexOf(randItem);

  console.log("What number is missing in the progression?");
  if (index !== -1) {
    stack[index] = "..";
  }
  const str = stack.join(" ");
  console.log(str);
  const userAnswer = parseInt(readlineSync.question("Your answer: "), 10);
  if (userAnswer !== randItem) {
    console.log(`"${userAnswer}" is wrong answer. Correct answer was "${randItem}".`);
    console.log(`Let's try again, ${username}!`);
    break;
  } else if (userAnswer === randItem) {
    stack.length = 0;
    score += 1;
    console.log("Correct!");
  }
  if (score === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
export default stack;
