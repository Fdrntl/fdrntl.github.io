function checkSum(number){
    let hundreds = Math.floor(number / 100)
    let tens = Math.floor((number % 100) / 10)
    let ones = number % 10
    let sum = hundreds + tens + ones

    return sum % 2 === 0
} 


console.log(checkSum(552))