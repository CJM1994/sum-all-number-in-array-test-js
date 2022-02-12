function sumItems(array) {
  function sumItems(array, n) {

    n = n || 0;

    if (Array.isArray(array[n])) {
      let x = 0;
      for (const element of array[n]) {
        x = sumItems(array[n], 0);
      }
      return x + sumItems(array, n + 1);
    }

    if (n < array.length) {
      return array[n] + sumItems(array, n + 1);
    }
    else return 0;
  }

  module.exports = sumItems;
}

module.exports = sumItems;