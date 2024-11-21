const reverseString = function(str) {
  let len = str.length;
  let arr = Array(len).fill("");

  for (let i = 0; i < len; i++) {
    arr[i] = str[len - 1 - i];
  }

  let result = arr.join("");

  return result;
};
// Do not edit below this line
module.exports = reverseString;
