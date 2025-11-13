const myGrades = [100, 100, 90, 73, 78, 94, 86];

let myAverage = 0;
//variables should be declared by using let 
for (let i = 0; i < myGrades.length; i++) {
//i should start at 0 which is the first item in the array.
//my grades <= returns NaN, fix by using < instead
myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);
console.log("//////////////////////////////////////////////////")
console.log("Question2")
function validateGrade(grade) {
    if (typeof grade !== "number" || isNaN(grade)) {
        throw new Error("Bad input: grade must be a number value.");
    }
    if (grade < 0) {
        throw new Error("Bad input:grade cannot be less than 0")
    }
    if (grade > 100) {
        throw new Error("Bad input:grade cannot be greater than 100")
    }

    console.log("Valid Grade:", grade);
}
validateGrade(50);
//validateGrade(C);
//validateGrade(749);
console.log("//////////////////////////////////////////////////")
function GradeError() {
    this.name ="GradeError"
}