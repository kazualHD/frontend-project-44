import readlineSync from "readline-sync";

let score = 0;
let correctAnswer = "";
console.log("Welcome to the Brain Games!");
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
const isNatural = (randValue) => {
  for (let i = 2; i <= randValue / 2; i += 1) {
    if (randValue % i === 0) {
      return false;
    }
  }
  return true;
};
// eslint-disable-next-line no-mixed-operators, no-shadow
const CorrectNo = (correctAnswer, userAnswer) => correctAnswer === "yes" && userAnswer === "yes" || correctAnswer === "no" && userAnswer === "no";
console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\"");
while (score < 3) {
  const randValue = Math.floor(Math.random() * 200);
  console.log(`Question: ${randValue}`);
  const userAnswer = readlineSync.question("Your answer: ");
  if (isNatural(randValue) === true) {
    correctAnswer = "yes";
  } else if (isNatural(randValue) === false) {
    correctAnswer = "no";
  }
  if (!CorrectNo(correctAnswer, userAnswer)) {
    console.log(`"${userAnswer}" is wrong answer. Correct answer was "${correctAnswer}" Let's try again, ${username}!`);
    break;
  }
  console.log("Correct!");
  score += 1;

  if (score === 3) {
    console.log(`Congratulations, ${username}!`);
    break;
  }
}
export default CorrectNo;
