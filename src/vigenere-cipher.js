const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Incorrect arguments!')
    }

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = '';

    let keyI = 0;
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i].toLowerCase())) {
        result += message[i];
        continue
      }
      let keyNumber = keyI % key.length;

      let keyPosition = alphabet.indexOf(key[keyNumber].toLowerCase());
      let messagePosition = alphabet.indexOf(message[i].toLowerCase());

      let resultDelim = ((messagePosition + keyPosition + 2) % alphabet.length);
      if(resultDelim === 0) {
        resultDelim = 26;
      }
      let resultChar = alphabet[resultDelim-2];
      if ((resultDelim === 1)) {
        resultChar = 'z'
      }
      result += resultChar;
      keyI ++;
    }
    if (this.value === true) {
      return result.toUpperCase()
    } else {
      return result.toUpperCase().split('').reverse().join('')
    }
    
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Incorrect arguments!')
    }

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = '';

    let keyI = 0;
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i].toLowerCase())) {
        result += message[i];
        continue
      }
      let keyNumber = keyI % key.length;

      let keyPosition = alphabet.indexOf(key[keyNumber].toLowerCase());
      let messagePosition = alphabet.indexOf(message[i].toLowerCase());

      let resultDelim = ((messagePosition - keyPosition + 2) % alphabet.length);
      if(resultDelim <= 0) {
        resultDelim = (26 + resultDelim);
      }
      let resultChar = alphabet[resultDelim-2];
      if(resultDelim === 1) {
        resultChar = 'z'
      }
      result += resultChar;
      console.log(i, keyI, keyNumber, keyPosition, messagePosition, resultChar)
      keyI ++;
    }
    if (this.value === true) {
      return result.toUpperCase()
    } else {
      return result.toUpperCase().split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};