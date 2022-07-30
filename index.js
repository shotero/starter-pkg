class BaseJumper {
  constructor(from, to) {
    this.numberBase = from;
    this.resultBase = to;
  }

  convert(a) {
    const decA = parseInt(a, this.numberBase);
    return decA.toString(this.resultBase);
  }

  add(a, b) {
    const decA = parseInt(a, this.numberBase);
    const decB = parseInt(b, this.numberBase);

    const decResult = decA + decB;

    return decResult.toString(this.resultBase);
  }
}

export { BaseJumper };
