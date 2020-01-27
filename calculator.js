class Calculator {
  total = 0;

  /**
   * Getter that returns calculator version.
   */
  get version() {
    return fetch('https://gist.githubusercontent.com/juanlizarazo/4b2d229ba483ca13b1a6d7bf3079dc8b/raw/228ac05e04118037be02c38d9b86945c1356a2e2/version.json')
        .then(function (result) {
          return result.json()
        })
        .then(function (json) {
          return json.version;
        });
  }

  /**
   * Adds value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  add(number) {
    return this.total += number;
  };

  /**
   * Subtracts number from current total.
   *
   * @param {number} number
   * @returns {*}
   */
  subtract(number) {
    return this.total -= number;
  };

  /**
   * Multiplies value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  multiply(number) {
    return this.total *= number;
  };

  /**
   * Divides value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  divide(number) {
    if (number === 0) {
      throw new Error('Cannot divide by zero');
    }

    return this.total /= number;
  };
}
