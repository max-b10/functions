// Students Score
// Total possible Score
// 15/20 -> You got a C (75%)
// A= 90-100, B= 80-89, C =70-79, D =60-69, F <=59

// I need a function with 2 variables studentScore and maxScore.
// I need to calculate the % within the function using the variables.

const gradeCalc = function (studentScore, maxScore = 20) {
  let percentage = (studentScore / maxScore) * 100;
  if (percentage >= 90) {
    return `You got ${percentage}%, which is an A!`;
  } else if (percentage >= 80) {
    return `You got ${percentage}%, which is a B!`;
  } else if (percentage >= 70) {
    return `You got ${percentage}%, which is a C!`;
  } else if (percentage >= 60) {
    return `You got ${percentage}%, which is a D!`;
  } else {
    return `You got ${percentage}%, which is an F retard!`;
  }
};
let grade = gradeCalc(18);
console.log(grade);

// The above can be simplified:
const gradeCalc = function (studentScore, maxScore = 20) {
  let percentage = (studentScore / maxScore) * 100;
  let letterGrade = "";

  if (percentage >= 90) {
    letterGrade = "A";
  } else if (percentage >= 80) {
    letterGrade = "B";
  } else if (percentage >= 70) {
    letterGrade = "C";
  } else if (percentage >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got ${percentage}%, which is a ${letterGrade}`;
};
let grade = gradeCalc(14);
console.log(grade);
