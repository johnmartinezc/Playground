const prompt = require('prompt-sync')({sigint: true});

let myArray1 = ["Dog", "Cat", "Ghost"];
let myArray2 = [5, 18, 2, 31, 40, 19, 0];
let myArray3 = ["Winter", "Spring", "Summer", "Fall"];

// for(let i = 0; i < myArray1.length; i++){
//     console.log(myArray1[i]);
// }

// for(let i = 0; i < myArray2.length; i++){
//     console.log(myArray2[i]);
// }

// for(let i = 0; i < myArray3.length; i++){
//     console.log(myArray3[i]);
// }
// printArray(myArray1);
// printArray(myArray2);
// printArray(myArray3);

function printArray(m){
    for(let i = 0; i < m.length; i++){
        console.log(m[i]);
    }
    console.log();
}

let myArray4 = ["Green", "Red"];
// printArray(myArray4);



function add(a, b){ //function declaration
    let result = a + b;
    console.log("a: " + a);
    console.log("b: " + b);
    console.log(result);
}

// add(5,11); //function call
// add(6,12);


/*
Functions
-a function is a specific task that we want to perform in our programs with the purpose of modularizing, or cleaning up our code for both efficiency and readability
-rather than write tons of code in our main body, we can break our code up into multiple functions to call upon as needed
-when we find ourselves repeating a task more than once, we should consider using a function instead - functions allow us to repeat certain tasks in our code with ease

Syntax:

function functionName(parameters){
    function body //the code you want to run inside your function
}

-parameters/arguments - the portion of your function that goes inside the parenthesis after the function name
-parameters are used as placeholder variables for your function
-whenever you call your function, you need to input the required amount of parameters as either values or variables.
-these parameters get utilized inside your function in order to complete your task based on the value of the parameters
-you can have as many parameters as you want from as little as none, to as many as needed

*/


function doubleNumber(num){
    //console.log(`${num} doubled is ${num*2}`);
    let doubleNumber = num*2;
    //return num * 2;
    return doubleNumber; //same as above
}

//function call
// let myNum1 = doubleNumber(10);
// let myNum2 = doubleNumber(15);

// console.log(`myNum1: ${myNum1}`);
// console.log(`myNum2: ${myNum2}`);

// let myNum3 = myNum1 + myNum2;
// let myNum4 = doubleNumber(myNum3);

// console.log(`myNum3: ${myNum3}`);
// console.log(`myNum4: ${myNum4}`);

// let myNum5 = doubleNumber(myNum3) + doubleNumber(myNum4);

// console.log(`myNum5: ${myNum5}`);

function greet(){
    let greeting = "Hello!";
    return greeting;
}

console.log(greet());

//or
let myGreet = greet();
console.log(myGreet);

function noReturnGreet(){
    console.log("Hey!!");
}

noReturnGreet();


let color1 = "blue";
let color2 = "red";
let color3 = "yellow";

function isBlue(color){
    if(color === "blue"){
        return true;
    } else {
        return false;
    }
}

console.log(isBlue(color1));
console.log(isBlue(color2));
console.log(isBlue(color3));