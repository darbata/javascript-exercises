const palindromes = function(str) {
  norm = str.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(norm);
  if (norm.length <= 1) {
    return false;
  }
  for (let i = 0; i < norm.length; i++) {
    if (norm[i] != norm[norm.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindromes("r3ace3car"));


// Do not edit below this line
module.exports = palindromes;
