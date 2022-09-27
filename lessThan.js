const prompt = require('prompt-sync')
({sigint: true})

let num = Number(prompt(`Enter a number: `))
console.log(num)

// if(num ===10) {
//     console.log("Your number is equal to 10")
// }

// if(num < 10 ){

// console.log("your number is less than 10")
// }

// if(num <=10){
//     console.log("Your number is less than or equat to 10")
// }

// if(num !==10){
//     console.log("Your number is not equal to 10")
// }

// if(num >10){
//    console.log("Your number is grater than 10")
// }else if(num < 10){
//     console.log("Your number is less than 10")
// }else{
//     console.log("Your number is equal to 10!")

// }

let myBool =true
if (num !== 10){
    myBool= false
}

if (myBool === true){
    console.log("true")
} else (
    console.log("False!")
)