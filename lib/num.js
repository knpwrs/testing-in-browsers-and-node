/**
 * This is a silly library which retrieves a random number asynchronously.
 * Works in Node, AMD, and Browsers.
 */
(function (name, global, definition) {
  if (typeof module !== 'undefined') {
    module.exports = definition();
  } else if (typeof define !== 'undefined' && typeof define.amd === 'object') {
    define(definition);
  } else {
    global[name] = definition();
  }
})('num', this, function () {
  return {
    /**
     * Squares a given number.
     *
     * @param  {Number}   a  The number to square.
     */
    square: function (a) {
      return a * a;
    },

    /**
     * Squares a number from the random number source.
     *
     * @param  {Function} cb Function to call with the number and its square.
     */
    squareRandomNumber: function (cb) {
      this._getRandomNumber(function (num) {
        cb(num, this.square(num));
      }.bind(this));
    },

    /**
     * Acts as a data source we want to mock. Calls a given function
     *  asynchronously with a random number. Pretend that this does something
     *  expensive like a network request that you don't want to do during
     *  testing.
     *
     * @param  {Function} cb The function to call with the random number.
     */
    _getRandomNumber: function (cb) {
      setTimeout(cb.bind(null, 4), 1000); // Chosen by fair dice roll. Guaranteed to be random.
    }
  };
});
