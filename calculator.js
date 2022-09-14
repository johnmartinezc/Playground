const prompt = require('prompt-sync')
({sigint: true})

// let exp1 = 1;
// exp1 = 2
// const exp2 = 10
// exp2 = 11

// console.log( exp2)

// let test = prompt('Please enter some text:')

// console.log(test)

let num1 = Number(prompt('Enter your first number:'))
let num2 = Number(prompt('Enter yor second number:'))
let result = 0
let operator = prompt('+,-,*,/')

if(operator === "+"){
    let result = num1 + num2
    console.log(num1 + " + " + num2 + " = " + result)

}

if(operator === "-"){
    let result = num1 - num2
    console.log(num1 + " - " + num2 + " = " + result)
}

if(operator === "*"){
    let result = num1 * num2
    console.log(num1 + " + " + num2 + " = " + result)

}

if(operator === "/"){
    let result = num1 / num2
    console.log(num1 + " + " + num2 + " = " + result)

}