class Calculator{
    isInvalidNumber(num) {
        return num === Infinity || num === null || num === undefined || Number.isNaN(num);
    }
    constructor(a, b) {
        if (this.isInvalidNumber(a) || this.isInvalidNumber(b)) {
            throw new Error("Invalid numbers");
        }
        this.a = a;
        this.b = b;
}
setX(num1) {
    if (this.isInvalidNumber(num1))throw new Error("Invalid numbers")
    this.a=num1
}
setY(num2) {
    if (this.isInvalidNumber(num2))throw new Error("Invalid numbers")
    this.b=num2
}
  logSum()
{
    return this.a+this.b
}
 logMul()
{
    return this.a*this.b
}
 logSub(){
    let res=0;
    (this.a<=this.b)?res+=this.b-this.a:res+=this.a-this.b
    return res
}
 logDiv() {
    if (this.b===0) throw new Error("Infinity")
    return Math.floor(this.a/this.b)
}
};
const Calc=new Calculator(2,10)
console.log(Calc.logSum())
console.log(Calc.logMul())
console.log(Calc.logSub())
console.log(Calc.logDiv())



