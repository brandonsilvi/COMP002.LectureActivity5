myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;
//variables should be declared by using let 
for (let i = 0; i < myGrades.length; i++) {
//i should start at 0 which is the first item in the array.
//my grades <= returns NaN, fix by using < instead
myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);