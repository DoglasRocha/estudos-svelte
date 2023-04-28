class Operation {
    constructor() {
        this.left = undefined;
        this.right = undefined;
        this.operator = undefined;
    }
}

class Calculator {
  constructor() {
    this.buffer = "";
    this.stack = new Operation();
    this.memory = 0;
  }

  updateBuffer(newChar) {
    this.buffer += newChar;
  }

  clearBuffer() {
    this.buffer = "";
  }

  getBuffer() {
    return this.buffer;
  }

  displayMemory() {
    this.buffer = this.memory.toString();
  }

  bufferIsAllNumber() {
    return !isNaN(this.buffer) && !isNaN(parseFloat(this.buffer));
  }

  addToMemory() {
    if (this.bufferIsAllNumber()) {
      this.memory += parseFloat(this.buffer);
    }
  }

  subtractFromMemory() {
    if (this.bufferIsAllNumber()) {
      this.memory -= parseFloat(this.buffer);
    }
  }

  parseBuffer() {
    let numbers = this.buffer.split(/[-+*\/]+/);
    let operators = this.buffer.split(/[\d.]+/);
    operators = operators.slice(1, operators.length - 1);
    numbers = numbers.map(n => parseFloat(n))

    return {numbers, operators}
  }
}

export default Calculator;
