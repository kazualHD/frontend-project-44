const a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let correct = "";
while (a !== 0 && b !== 0) {
  if (a > b) {
    correct = a % b;
  } else {
    correct = b % a;
  }
}
console.log(a + b);
