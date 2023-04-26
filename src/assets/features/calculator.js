class Calculator {
  constructor() {
    this.buffer = "";
    this.stack = [];
    this.memory = 0;
  }

  updateBuffer(newChar) {
    this.buffer += newChar;
    console.log(this.buffer);
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
}

export default Calculator;
