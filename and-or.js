const prompt = require('prompt-sync')
({sigint: true})

let num = Number(prompt(`Enter a number: `))
console.log(num)



// if (num >= 18 && num <= 24){
//     console.log("You can vote but not rent a car ")
// }

// if (num === 16 || num ===17){
//     console.log("You can vote but not rent a car")
// }

let boolean1 = true
let boolean2 = false
let boolean3 = true
if (boolean1){
    console.log("true!")
}

console.log("1")
if (boolean1 === true && boolean2 === true){
    console.log("True!")

}else {
    console.log("false!")
}

console.log("2")
if (boolean1 === true || boolean2 === true){
    console.log("True!")

}else {
    console.log("false!")
}

console.log("3")
if (boolean1 === false || boolean2 === true){
    console.log("True!")

}else {
    console.log("false!")
}

console.log("4")
if (!boolean1 === true){
    console.log("true!")
}else {
    console.log("false")
}

console.log("7")
if (boolean1 === true || boolean2 === tr || boolean3 === false){
    console.log("True!")
}else{
    console.log("False!")
}

if ((boolean1 === true || boolean2 === true) && boolean3 !== true){
    console.log("true!")
}else {
    console.log("false")
}


console.log("9")
if (boolean1 === false || boolean2 === false && boolean3 === true){
    console.log("true!")
}else {
    console.log("false")
}

