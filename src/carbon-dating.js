const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sample) {
  if (!(sample / 2 < 7.5 && sample / 2 > 0 && typeof sample == 'string')) {
    return false
  }
  return t = Math.ceil(Math.log(MODERN_ACTIVITY / sample)/(0.693/HALF_LIFE_PERIOD));
}

module.exports = {
  dateSample
};