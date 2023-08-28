let answer = [];
let sum = 0;

let result = [];

for (let i = 1; i < 10000; i++) {
  let number = i;
  for (let j = 0; j < String(number).length; j++) {
    sum += +String(number)[j];
  }
  answer.push(number + sum);
  if (!answer.includes(number)) {
    result.push(number);
  }
  sum = 0;
}

console.log(result.join("\n"));
