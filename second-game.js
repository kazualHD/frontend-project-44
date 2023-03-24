import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
console.log("What is the result of the expression?");
const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const minus = (a, b) => a - b;
const movement = [sum, mult, minus];
const GetRandomMove = (a, b) => {
  const rand = Math.floor(Math.random() * movement.length);
  const rValue = movement[rand];
  return rValue;
};

const getRandomInt = (max) => Math.floor(Math.random() * max);
const SomeInt = getRandomInt(50);
console.log(`Question: ${SomeInt}`);
