/* Practice Assignment 3:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Construct a basic IF statement that assigns "Informatics" to the
// myDept variable IF the value of myNumber is greater than 1.
// The variables are already declared.
// Do not change the existing code.

const question1 = (myNumber) => {
  let myDept;
  /////// write your IF statement below this line /////////
  if(myNumber > 1){
    myDept = "Informatics";
  }
  /////// write your IF statement above this line /////////
  return myDept;
};

// 2) Construct an IF statement that assigns "JavaScript" to the
// myLang variable IF the length property of myValue is equal to 10.
// Add an ELSE statement that assigns "Python" otherwise.
// The variables are already declared.
// Do not change the existing code.

const question2 = (myValue) => {
  let myLang;
  /////// write your IF statement below this line /////////
  if(myValue.length == 10){
    myLang = "Javascript";
  }
  else{
    myLang = "Python";
  }
  /////// write your IF statement above this line /////////
  return myLang;
};

// 3) Copy the IF / ELSE statement from #2 and paste it below.
// Add an ELSE IF statement to it that checks if the length property of
// myValue is greater than 3. If true, assign "PHP" to myLang.
// The variables are already declared.
// Do not change the existing code.

const question3 = (myValue) => {
  let myLang;
  /////// write your IF statement below this line /////////
  if(myValue.length == 10){
    myLang = "Javascript";
  }
  else if(myValue > 3){
    myLang = "PHP";
  }
  else{
    myLang = "Python";
  }
  /////// write your IF statement above this line /////////
  return myLang;
};

// 4) Construct a SWITCH statement that will assign the following values to the variable
// myFaveFood based on the value of myNumber the SWITCH statement receives:
// 1 = Pizza, 2 = Hamburger, 3 = Ice Cream, 4 = Sushi, Anything else = Pho
// The variables are already declared.
// Do not change the existing code.

const question4 = (myNumber) => {
  let myFaveFood;
  /////// write your SWITCH statement below this line /////////
  switch(myNumber) {
  case 1:
    myFaveFood = "Pizza";
    break;
  case 2:
    myFaveFood = "Hamburger";
    break;
  case 3:
    myFaveFood = "Ice Cream";
    break;
  case 4:
    myFaveFood = "Sushi";
    break;
  default:
      myFaveFood = "Pho";
}
  /////// write your SWITCH statement above this line /////////
  return myFaveFood;
};

// 5) Construct a TERNARY statement with the ternary operator
// that checks if the variable myTemp is greater than or equal to 75.
// If true, assign the value "Great weather!" to the variable myWeather.
// If false, assign the value "Still cold." to the variable myWeather.
// This ternary operator statement should just be one line of code.
// The variables are already declared.
// Do not change the existing code.

const question5 = (myTemp) => {
  let myWeather;
  /////// write your TERNARY OPERATOR statement below this line /////////
  myWeather = myTemp >= 75 ? "Great weather!" : myTemp < 75 ? "Still cold.";
  /////// write your TERNARY OPERATOR statement above this line /////////
  return myWeather;
}

const myNumber = prompt("Enter a Number");
const myValue = prompt("Enter a Number");
const myNumber = prompt("Enter a Number");
const myTemp = prompt("Enter a Number");
//console.log(question1(prompt("Enter a Number")));
  
const vars = ["myDept", "myLang", "myLang", "myFaveFood", "myWeather"]
const questions = [myDept, myLang, myLang, myFaveFood, myWeather];
let text = ""
for (let j = 1; j < 6; j++){
    console.log (j + ". " + vars[j] + " = " + questions[j] + "\n");
    text += j + ". " + vars[j] + " = " + questions[j] + "<br>";
}
document.getElementById("text").innerHTML = text;
