const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  if (!('separator' in options)) {
    options.separator = '+'
  }
  if (!('additionSeparator' in options)) {
    options.additionSeparator = '|'
  }
  if (str === null) {
    str = 'null'
  }
  if (options.addition === null) {
    options.addition = 'null'
  }


  let addition = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(options.addition);
  }
  if (!('additionRepeatTimes' in options)) {
    addition.push(options.addition);
  }

  let additionContent = addition.join(options.additionSeparator);

  let arr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    arr.push(str + additionContent);
  }
  if (!('repeatTimes' in options)) {
    arr.push(str.toString() + additionContent);
  }

  return arr.join(options.separator);
}

module.exports = {
  repeater
};