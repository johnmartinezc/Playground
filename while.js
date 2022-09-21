const prompt = require('prompt-sync')({sigint: true});

let passCode = 1234;

let guess = Number(prompt("Guess the passcode: "));

// if(guess === passCode){
//     console.log("You guessed correctly!");
// } else {
//     console.log("WRONG!");
// }

/*
Loop - a way to repeat the same task in your code
While Loop - a while loop repeats a task in a program based on a condition

while(condition === true){
    //perform the code inside the while loop
}

in this case, while the guess is NOT equal to the passcode, keep prompting the user to try again

while true, I will do
*/
// while(guess !== passCode){
//     guess = Number(prompt('Try again: '));
// }

// // if(guess === passCode){
// //     console.log("You guessed correctly!");
// // }

// console.log("You guessed correctly!"); //this line only runs after the while loop condition isn't met, so in order for this line to run, passCode has to equal our guess


// // let bool = true;

// // while(bool){
// //     console.log("hi!");
// //}//infinite loop, will print out "hi!" forever, until control + c is used to break out of your loop


// let num = 1;

// while(num <= 10){

//     console.log(num);

//     // num = num + 1;
//     // num += 1;
//     num++; //same as the two lines above BUT it only works for incrementing by 1
// }

// while(num <= 20){
//     console.log(num);
//     num += 2;
// }

// let sum = 0;
// //add all numbers between 0 and 5
// num = 0;
// while(num <= 5){
//     sum = num + sum;
//     num++;
//     console.log(sum);
// }

// console.log(sum);

let x = 0

while (x <= 100){
  
  if(x % 5 ===0){
    console.log(x)
  }
  x++
}