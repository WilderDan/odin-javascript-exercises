const palindromes = function (str) {
  let standardForm = str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
  return standardForm === standardForm.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
