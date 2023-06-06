class Calculator {
  add(value, value2) {
    return value + value2;
  }
  subtract(value, value2) {
    return value - value2;
  }
  multiply(value, value2) {
    return value * value2;
  }
  divide(value, value2) {
    return value / value2;
  }
}

calculator = new Calculator();

module.exports = calculator;
