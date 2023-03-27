import readlineSync from "readline-sync";

let score = 0;
let correctAnswer = "";
console.log("Welcome to the Brain Games!");
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
// eslint-disable-next-line no-shadow
const checkUserAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
while (score < 3) {
  const symbols = ["+", "-", "*"];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  const operation = symbols[randomIndex];
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const question = `${num1} ${operation} ${num2}`;
  console.log("What is the result of the expression?");
  console.log(`Question: ${question}`);
  if (operation === "+") {
    correctAnswer = num1 + num2;
  } else if (operation === "-") {
    correctAnswer = num1 - num2;
  } else if (operation === "*") {
    correctAnswer = num1 * num2;
  }
  const userAnswer = parseInt(readlineSync.question("Your answer: "), 10);
  if (!checkUserAnswer(userAnswer, correctAnswer)) {
    console.log(`"${userAnswer}" is wrong answer. Correct answer was "${correctAnswer}". Let's try again, ${username}!`);
    break;
  }
  score += 1;
  console.log("Correct!");
}
if (score === 3) {
  console.log(`Congratulations, ${username}!`);
}
export default checkUserAnswer;
