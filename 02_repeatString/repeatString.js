const repeatString = function(str, num) {
  //if (typeof str !== 'string') {
  //  return 'ERROR';
  //}

  if (num < 0) {
    return 'ERROR';
  }

  result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  };
  return result;
};

// Do not edit below this line
module.exports = repeatString;
