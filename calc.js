
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(question) {
  const regex = /What is (\d+) (plus|minus|multiplied by|divided by) (\d+)\?/;
  const match = question.match(regex);

  if (!match) {
    console.log("Invalid question format!");
    return;
  }

  const num1 = parseInt(match[1]);
  const operator = match[2];
  const num2 = parseInt(match[3]);
  let result;

  switch (operator) {
    case "plus":
      result = num1 + num2;
      break;
    case "minus":
      result = num1 - num2;
      break;
    case "multiplied by":
      result = num1 * num2;
      break;
    case "divided by":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operation!");
      return;
  }

  console.log(`${num1} ${operator} ${num2} is ${result}`);
}

rl.question("Enter your math question: ", (question) => {
  calculate(question);
  rl.close();
});
