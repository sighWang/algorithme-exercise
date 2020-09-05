// pow获取n次方
//Math.floor 得到单精度数

const reverseInterger = (inputNumber: number): number => {
    const min:number = -Math.pow(2, 31)
    const max:number = Math.pow(2, 31) -1 
    if(inputNumber > max || inputNumber < min) return 0
    if(inputNumber === 0) return 0
    const isPositive:boolean = inputNumber > 0
    inputNumber = isPositive ? inputNumber : toInt(-inputNumber)
    let result:number = 0
    do{
        const remainder = toInt(inputNumber % 10)
        inputNumber = toInt(inputNumber / 10)
        result = result * 10 + remainder
    }while (inputNumber !== 0)
    result = isPositive ? result : -result
    if(result > max || result < min) return 0
    return result
}

const toInt = (input: number): number => {
    return Math.floor(input)
}

console.log(reverse(-122))

// console.log(reverseInterger(102))
// console.log(reverseInterger(-102))
// console.log(reverseInterger(Math.pow(2, 31)+3))