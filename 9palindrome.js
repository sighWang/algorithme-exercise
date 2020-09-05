// https://juejin.im/post/6854573209531252749
// https://cloud.tencent.com/developer/article/1387163


const isPalindrome = (inputNumber) => {
    let inputString = inputNumber.toString()
    for(let i = 0; i < inputString.length; i++) {
        if(inputString.charAt(i) !== inputString.charAt(inputString.length - i -1)) {
            return false
        }
    }
    return true
}

const isPalindrome2 = (inputNumber) => {
    const reverse = (x) => {
        let result = 0;
        do {
            let a = Math.floor(Math.fround(x % 10))
            x = Math.floor(Math.fround(x / 10))
            result = result * 10 + a
        } while (x > 0)
        return result
    }
    if(inputNumber < 0) return false
    if(reverse(inputNumber) === inputNumber) return true
    return false
}

// console.log('121', isPalindrome(121))
// console.log('-121', isPalindrome(-121))
// console.log('10', isPalindrome(10))

console.log('121', isPalindrome2(121))
console.log('-121', isPalindrome2(-121))
console.log('10', isPalindrome2(10))
