import readlineSync from "readline-sync";

let score = 0;
let CorrectAnswer = "";
console.log("Welcome to the Brain Games!");
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
// eslint-disable-next-line consistent-return
const CheckUserAnswer = (secondasnwer, CorrectAnswer) => {
  if (secondasnwer === CorrectAnswer) {
    return true;
  }
};
// eslint-disable-next-line no-constant-condition
while (true) {
  const symbols = ["+", "-", "*"];
  const randomIndex = Math.floor(Math.random() * (symbols.length));
  const resultOfRandom = symbols[randomIndex];
  const rnum1 = Math.floor((Math.random() * 100));
  const rnum2 = Math.floor((Math.random() * 100));
  const sum = (`${rnum1} + ${rnum2}`);
  const minus = (`${rnum1} - ${rnum2}`);
  const mult = (`${rnum1} * ${rnum2}`);
  console.log("What is the result of the expression?");
  if (resultOfRandom === "+") {
    console.log(`Question: ${sum}`);
  } else if (resultOfRandom === "-") {
    console.log(`Question: ${minus}`);
  } else if (resultOfRandom === "*") {
    console.log(`Question: ${mult}`);
  }
  if (resultOfRandom === "+") {
    CorrectAnswer = rnum1 + rnum2;
  } else if (resultOfRandom === "-") {
    CorrectAnswer = rnum1 - rnum2;
  } else if (resultOfRandom === "*") {
    CorrectAnswer = rnum1 * rnum2;
  }
  const secondasnwer = parseInt(readlineSync.question("Your answer: "), 10);
  if (CheckUserAnswer(secondasnwer, CorrectAnswer) !== true) {
    console.log(`"${secondasnwer}" is wrong answer. Correct answer was "${CorrectAnswer}" Let's try again`);
    break;
  }
  score += 1;
  console.log("Correct!");
  if (score === 3) {
    console.log(`Congratulations, ${username}`);
    break;
  }
}
