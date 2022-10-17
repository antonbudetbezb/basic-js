const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  let arr = [];

  for (element of members) {
    if (typeof element == 'string') {
      let name = element.trim();
      arr.push(name[0].toUpperCase())
    }
  }

  arr.sort();
  return arr.join('')
}

module.exports = {
  createDreamTeam
};