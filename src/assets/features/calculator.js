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

  eraseFromBuffer() {
    this.buffer = this.buffer.slice(0, this.buffer.length - 1);
  }

  clearBuffer() {
    this.buffer = "";
  }

  getBuffer() {
    return this.buffer;
  }

  displayMemory() {
    this.buffer +=
      this.memory >= 0 ? "+" + this.memory.toString() : this.memory.toString();
  }

  bufferIsAllNumber() {
    // @ts-ignore
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
    let [numbers, operators] = this.parseBuffer();
    this.addToStack(numbers, operators);
    let result = this.operate();
    this.buffer = result.toString();
    this.stack = [];
  }

  parseBuffer() {
    // removing operators from end of buffer
    let cleanBuffer = this.buffer;
    if (this.operators.includes(cleanBuffer[cleanBuffer.length - 1]))
      cleanBuffer = cleanBuffer.slice(0, cleanBuffer.length - 1);

    let numbers = cleanBuffer.split(/[-+*\/]+/);
    numbers = numbers.filter((element) => element !== "");
    let operators = cleanBuffer.split(/[\d.]+/);
    operators = operators.filter((element) => element !== "");
    let convertedNumbers = numbers.map((n) => parseFloat(n));

    return [convertedNumbers, operators];
  }

  addToStack(numbers, operators) {
    let [numCount, operatorCount] = [0, 0];

    console.log(numbers, operators);
    if (numbers.length !== operators.length) {
      this.stack.unshift(numbers[numCount]);
      numCount++;
    }

    while (numCount < numbers.length) {
      let num = numbers[numCount];
      numCount++;
      let operator = operators[operatorCount];
      operatorCount++;

      if (operator === "+" || operator === "-") {
        this.stack.unshift(new UnaryOperator(num, operator));
      } else {
        let lastInStack = this.stack.shift();
        this.stack.unshift(new BinaryOperator(lastInStack, num, operator));
      }
    }
  }

  operate() {
    return this.stack.reduce((accumulator, current) => {
      if (isNaN(current)) return accumulator + current.solve();
      else return accumulator + current;
    }, 0);
  }
}

export default Calculator;
