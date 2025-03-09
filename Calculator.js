class Calculator{
    static a = 0;
    static b = 0;
    isInvalidNumber(num) {
        return num === Infinity || num === null || num === undefined || Number.isNaN(num);
    }
    constructor(a, b) {
        if (this.isInvalidNumber(a) || this.isInvalidNumber(b)) {
            throw new Error("Invalid numbers");
        }
    Calculator.a = a;
    Calculator.b = b;
}
setX(num1) {
    if (this.isInvalidNumber(num1))throw new Error("Invalid numbers")
    this.a=num1
}
setY(num2) {
    if (this.isInvalidNumber(num2))throw new Error("Invalid numbers")
    this.b=num2
}
 static logSum=()=>
{
    return this.a+this.b
}
static logMul=()=>
{
    return this.a*this.b
}
static logSub=()=>{
    let res=0;
    (this.a<=this.b)?res+=this.b-this.a:res+=this.a-this.b
    return res
}
static logDiv=()=> {
    if (this.b===0) throw new Error("Infinity")
    return this.a / this.b
}
};
const Calc=new Calculator(2,10)
Calc.setX(2)
Calc.setY(10)


const logSumRef = Calculator.logSum;
console.log(logSumRef()); 
const logMulRef = Calculator.logMul;
console.log(logMulRef()); 
console.log(Calculator.logSub()); 
console.log(Calculator.logDiv()); 
