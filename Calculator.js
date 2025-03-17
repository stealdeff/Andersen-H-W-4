class Calculator {
    #a
    #b

    isInvalidNumber(num) {
        return typeof num !== 'number' || !isFinite(num);
    }
    constructor(a, b) {

        if (this.isInvalidNumber(a) || this.isInvalidNumber(b)) {
            throw new Error("Invalid numbers");
        }
        this.#a = a
        this.#b = b

    }
    setX(num1) {
        if (this.isInvalidNumber(num1)) throw new Error("Invalid numbers")
        this.#a = num1
    }
    setY(num2) {
        if (this.isInvalidNumber(num2)) throw new Error("Invalid numbers")
        this.#b = num2
    }
    logSum = () => {
        return this.#a + this.#b
    }
    logMul = () => {
        return this.#a * this.#b
    }
    logSub = () => {
        return this.#b - this.#a
    }
    logDiv = () => {
        if (this.#b === 0) throw new Error("Infinity")
        return this.#a / this.#b
    }
};
const calc = new Calculator(2, 10)
calc.setX(2)
calc.setY(10)


const logSumRef = calc.logSum.bind(calc);
const logMulRef = calc.logMul.bind(calc);
const logSubRef = calc.logSub.bind(calc);
const logDivRef = calc.logDiv.bind(calc);
console.log(logSumRef());
console.log(logMulRef());
console.log(logSubRef());
console.log(logDivRef());