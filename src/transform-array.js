const { NotImplementedError } = require('../extensions/index.js');


function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }

  let length = arr.length;
  let controlConsId = {};

  for (let i = 0; i < length; i++) {
    if (typeof arr[i] == 'string') {
      controlConsId[i] = arr[i];
    }
  }
  
  let result = [...arr];
  let currentPosition = 0;

  for (let i = 0; i < length; i++) {
    if (i in controlConsId) {
      switch (controlConsId[i]) {
        
        case '--double-next':
          if (currentPosition == length - 1) {
            result.splice(currentPosition, 1)
            break;
          }
          result.splice(currentPosition, 1, result[currentPosition + 1])
          break;
  
        case '--double-prev':
          if (currentPosition == 0) {
            result.splice(currentPosition, 1)
            break;
          }
          result.splice(currentPosition, 1, result[currentPosition - 1])
          break;
  
        case '--discard-next':
          if (currentPosition == length - 1) {
            result.splice(currentPosition, 1)
            break;
          }
          result.splice(currentPosition, 2, '')
          length -= 2
          currentPosition -= 1
          break;
  
        case '--discard-prev':
          if (result[currentPosition - 1] == '' || currentPosition == 0) {
            result.splice(currentPosition, 1)
            break
          }
          result.splice(currentPosition-1, 2)
          length -= 2
          currentPosition -= 2
          break;
      }
    }
    currentPosition++
  }

  return result.filter(el => el !== '');
}

module.exports = {
  transform
};