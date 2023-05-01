class Operator {
  constructor() {
    if (this.constructor == Operator) {
      throw new Error("This class should not be instantiated!");
    }
  }

  solve() {
    throw new Error("This class should not be instantiated!");
  }
}

class BinaryOperator extends Operator {
  constructor(left, right, operator) {
    super();
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  solve() {
    if (isNaN(this.left)) this.left = this.left.solve();
    if (isNaN(this.right)) this.left = this.right.solve();

    switch (this.operator) {
      case "/":
        return this.left / this.right;

      case "*":
        return this.left * this.right;
    }
  }
}

class UnaryOperator extends Operator {
  constructor(right, operator) {
    super();
    this.right = right;
    this.operator = operator;
  }

  solve() {
    if (isNaN(this.right)) this.right = this.right.solve();

    switch (this.operator) {
      case "+":
        return +this.right;

      case "-":
        return -this.right;
    }
  }
}

class Calculator {
  constructor() {
    this.buffer = "";
    this.stack = [];
    this.memory = 0;
    this.unaryOperators = "-+";
    this.binaryOperators = "/*";
    this.operators = this.unaryOperators + this.binaryOperators;
  }

  updateBuffer(newChar) {
    // do not allow first char in buffer to be binary operator
    if (this.binaryOperators.includes(newChar) && this.buffer.length === 0)
      return;

    // do not allow to put two operators in sequence
    if (this.operators.includes(newChar))
      for (let i = 0; i < this.operators.length; i++)
        if (this.operators[i] === this.buffer[this.buffer.length - 1]) return;

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

  execOperation() {
    let { numbers, operators } = this.parseBuffer();
    this.addToStack(numbers, operators);
  }

  parseBuffer() {
    // removing operators from end of buffer
    let cleanBuffer = this.buffer;
    if (this.operators.includes(cleanBuffer[cleanBuffer.length - 1]))
      cleanBuffer = cleanBuffer.slice(0, cleanBuffer.length - 1);

    let numbers = cleanBuffer.split(/[-+*\/]+/);
    let operators = cleanBuffer.split(/[\d.]+/);
    operators = operators.slice(1, operators.length - 1);
    let convertedNumbers = numbers.map((n) => parseFloat(n));

    console.log(cleanBuffer);
    return { convertedNumbers, operators };
  }

  addToStack(numbers, operators) {
    let [numCount, operatorCount] = [0, 0];
  }
}

export default Calculator;
