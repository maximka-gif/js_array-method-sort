'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = compareFunction;

    if (typeof compare !== 'function') {
      compare = (a, b) => {
        return a.toString().localeCompare(b.toString());
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
