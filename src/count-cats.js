const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let count = 0;
  for (arr of matrix) {
    for (el of arr) {
      if (el === '^^') count++
    }
  }
  return count
}

module.exports = {
  countCats
};
