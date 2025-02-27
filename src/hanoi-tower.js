const { NotImplementedError } = require('../extensions/index.js');


function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.floor(turns / turnsSpeed * 3600);
  return {
    turns,
    seconds
  }
}

module.exports = {
  calculateHanoi
};