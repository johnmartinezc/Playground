const prompt = require('prompt-sync')({sigint: true});

// let a = 1;
// let b = 2;
// let c = 3;

// //Array
// //an array is a type of data structure that allows us to group different types of data programatically 
// let myArray = [1, 2, 3];

// console.log(myArray);

// let myArray2 = [a,b,c]; //using the variables a,b,c
// console.log(myArray2);

// let myArray3 = ["a", "b", "c"]; //using the strings "a", "b", and "c"

// console.log(myArray3);

// let names = ["Jimmy", "Kim", "Chuck", "Howard"];
// index       0        1      2        3
// item        1        2      3 

// console.log(names[0]); //names[0] evaluates to "Jimmy" because the string "Jimmy" is at index 0 in the names array

// let secondArrayItemInNames = names[1];
// console.log(`The 2nd item in my names array is ${secondArrayItemInNames}`);

// console.log(`The third item in my names array is ${names[2]}`);

// console.log(names[3]); //undefined for arrays with 3 items

// let namesLength = names.length; //how many items in your array
// console.log(namesLength);

// let lastIndex = namesLength - 1;
// console.log(names[lastIndex]);

// let secondToLastItem = names[names.length-2];
// console.log(secondToLastItem);

// console.log(lastIndex);


// let numsArray1 = [6, 25, -7, 30, 100, 71, 82];
// let numsArray2 = [5, 8, 18, 24];
// let numsArray3 = [32, 7, 81, 85];

// console.log("Last number in numsArray1: " + numsArray1[numsArray1.length-1]);

// console.log("Last number in numsArray2: " + numsArray2[numsArray2.length - 1]);

// console.log("Last number in numsArray3: " + numsArray3[numsArray3.length - 1]);

// console.log(`The second item in numsArray1 is ${numsArray1[1]}`);

// console.log(`The first item in numsArray2 is ${numsArray2[0]}`);

//a string is an array of characters
// let str = "Somewhere At The Bottom of the River";

// let firstCharOfStr = str[0];
// console.log(firstCharOfStr);
// console.log(str[0]);

// let lastStringChar = str[str.length-1];
// console.log(lastStringChar);

// console.log(str[8]);
// console.log(str[9]); //this is a space
// console.log(str[10]);

// console.log(str.substring(0,9));
// console.log(str[0,9]); NOT THE SAME THING AS ABOVE!  this doesn't evaluate to anything

// you can have multiple data types in the same array
// let typeArray = [1, 7, "string", 5, true];
// console.log(typeArray);

// prompting user for array input
// let userArray = JSON.parse(prompt("Enter an array: "));
// console.log(userArray);
// console.log(typeof userArray); //array is considered an 'object' type

// let secondString = userArray[1];

// console.log(secondString);

// let firstCharOfSecondString = secondString[0];
// console.log(firstCharOfSecondString);

// console.log(userArray[1][0]); //same as above

// let characters = ["Link", "Marth", "Pikachu"];
// let index = 0;


// while(index < characters.length){
//     console.log(`${index} - ${characters[index]}`);
//     index++;
// }

// while(index <= characters.length-1){
//     console.log(`${index} - ${characters[index]}`);
//     index++;
// }