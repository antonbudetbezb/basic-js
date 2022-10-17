const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {

  getLength() {
    return chainMaker.content.length
  },

  addLink(value) {
    if (!chainMaker.content) {
      chainMaker.content = [];
    }

    if (value === null) {
      chainMaker.content.push('null');
      return this;
    }

    if (value == null) {
      chainMaker.content.push(' ');
      return this;
    }
    chainMaker.content.push(value.toString())

    return this
  },

  removeLink(position) {
    if(position <= 0 || position > chainMaker.getLength() || typeof position !== 'number') {
      chainMaker.content = [];
      throw new Error ('You can\'t remove incorrect link!');
    }

    chainMaker.content.splice(position - 1, 1);
    return this
  },

  reverseChain() {
    if (!chainMaker.content) {
      chainMaker.content = [];
    }

    chainMaker.content.reverse();
    return this
  },

  finishChain() {
    let result = '';
    let arr = chainMaker.content;
    for (el of arr) {
      result += `( ${el} )`;
      result += '~~';
    }
    chainMaker.content = [];
    return result.slice(0, result.length - 2)
  }
};

module.exports = {
  chainMaker
};