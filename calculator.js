function Calculator() {
  this.read = function() {
    first = +prompt('first value');
    second = +prompt('second value');
    this.first = first;
    this.second = second;
  }
  this.sum = function() {
    return this.first + this.second;
  }
  this.mul = function () {
    return this.first * this.second;
  }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());