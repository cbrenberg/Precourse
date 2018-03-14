//  In these first 6 questions, replace `null` with the answer

//  create a string variable, it can contain anything
const newString = 'hello';

//  create a number variable, it an be any number
const newNum = 68329;

//  create a boolean variable
const newBool = true;

//  solve the following math problem
const newSubtract = 10 - 5 === 5;

//  Solve the following math problem
const newMultiply = 10 * 4 === 40;

//  Solve the following math problem:
const newModulo = 21 % 5 === 1;

//  In the next 22 problems you will compete the function. All of your code will go inside of the function braces.
//  Make sure you use return when the prompt asks you to.
//  hint: console.log() will NOT work.
//  Do not change any of the function names

function returnString(str) {
  return str;
}

function add(x, y) {
  const sum = x + y;
  return sum;
}

function subtract(x, y) {
  const diff = x - y;
  return diff;
}

function multiply(x, y) {
  const product = x * y;
  return product;
}

function divide(x, y) {
  const quotient = x / y;
  return quotient;
}

function areEqual(x, y) {
  return x === y;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num > 50) {
    return true;
  }
  return false;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  const modulo = x % y;
  return modulo;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  const squared = Math.pow(num, 2);
  return squared;
}

function cube(num) {
  // cube num and return the new value
  // code here
  const cubed = Math.pow(num, 3);
  return cubed;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  const power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  // round num and return it
  // code here
  const rounded = Math.round(num);
  return rounded;
}

function roundUp(num) {
  // round num up and return it
  // code here
  const rounded = Math.ceil(num);
  return rounded;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  let emphasis = str;
  emphasis += '!';
  return emphasis;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  const hello = `Hello ${name}!`;
  return hello;
}

// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  const rectangleArea = length * width;
  return rectangleArea;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  const triangleArea = 0.5 * base * height;
  return triangleArea;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
