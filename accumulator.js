function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt('How much would u like to add?');
  }
}

let accumulator = new Accumulator(2);
accumulator.read();
alert(accumulator.value)