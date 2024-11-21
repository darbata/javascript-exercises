const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const multiply = function(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result *= arr[i];
    //console.log(result);
  }
  return result;
};

const power = function(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
    //console.log(result);
  }
  return result;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  let result = a;
  for (let i = 1; i < a; i++) {
    result *= i;
    console.log(result);
  }
  return result;
};

console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


