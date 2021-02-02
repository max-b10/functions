// let add = function (a, b, c) {
//   return a + b + c;
// };
// let result = add(10, 50, 20);
// console.log(result);

// //Default arguments
// let getScoreText = function (name, score = 20) {
//   return `Name: ${name} Score: ${score}`;
// };

// let scoreText = getScoreText("Max");
// console.log(scoreText);

const tipCalculator = function (total, tipPercent = 0.2) {
  return total * tipPercent;
};

let tip = tipCalculator(100);
console.log(tip);
