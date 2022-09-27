let myArray = ["Dog", "Cat", "Deer", "Bear", "Bird"];
let array2 = ["Flower", "Triangle"];

console.log(myArray[myArray.length - 1]);


//.reverse()
//reads the array backwards (from last index to first index), putting it in reverse order
//.reverse() replaces the original array
console.log(myArray.reverse());
console.log(myArray);

//.push("item")
//adds a an item (or items) to the end of the array
myArray.push("Fish", "Crab");
//myArray.push(["a", "b", "c"])
array2.push("Car");
console.log(myArray);
console.log(array2);

//.pop()
//removes an item from the end of an array
myArray.pop();
myArray.pop();
console.log(myArray);

//.unshift("item")
//adds to the front of an array
// myArray.unshift("Monkey", "Rabbit");
console.log(myArray);

//.shift()
//removes item from the beginning of an array
// myArray.shift();
console.log(myArray);

//indexOf("item")
//gets the first index of the item you are searching for inside the ().
//if the item cannot be found, return -1
// myArray.unshift("Deer");
console.log(myArray);
console.log(`Deer is located at index ${myArray.indexOf("Deer")}`);
console.log(myArray.indexOf("Bug")); //There's no bug in our array, so we get -1

// let nums = [1,2,3];
console.log(nums.indexOf(2));

//.lastIndexOf();
//works the exact same as indexOf, except it gets the index of the last item
console.log("The last index of Deer is: " + myArray.lastIndexOf("Deer"));


//.includes("item")
//includes checks to see if an item is included in an array.  if it is, return true.  if it is not, return false.
console.log(myArray.includes("Bird")); 

// .splice(index)
// .splice() starts at index, and then removes all items from array[index] to the end of the array
// you can get access to the deleted portion, most simply, by using a variable and setting it equal to array.splice(index)

let mySplice = myArray.splice(2); //removes items from index 2 to the end, and stores the deleted values in our mySplice variable
console.log(myArray); //the modified array
console.log(mySplice); //the spliced section

// .splice(index, number of items to remove)
// start at index, and remove how many items specified in numbers to remove
console.log(myArray)
let mySplice2 = myArray.splice(myArray.indexOf("Cat"),1);
console.log(myArray);
console.log(mySplice2);

//.slice(first index (inclusive), last index (exclusive)) - makes a copy array of the range specified WITHOUT modifying our original array
//can use negative numbers to work from the end of the array
let copy = myArray.slice(1,3);
console.log("New Slice: ");
console.log(copy);


console.log("Original myArray: ");
console.log(myArray);

let elements1 = ["Water", "Earth"];
let elements2 = ["Fire", "Air"];

// .concat(arrayToAdd) - combines two arrays together - doesn't modify the original arrays
firstArray.concat(lastArray)
console.log(elements1);
console.log(elements2);

console.log(elements1.concat(elements2));
console.log(elements1 + elements2); //not the same thing, converts to a string and formats it in a way that's probably not helpful
console.log(elements1);
let allElements = elements1.concat(elements2);
console.log(allElements);

// .join() - takes an array and by default, converts it into a comma separated string.  Doesn't modify the original array

//.join(" ") -separates them by a space instead of a comma.  You can change what's inside the () to whatever you want

console.log(myArray.join());
console.log(myArray.join(" "));
console.log(myArray.join("-"));
console.log(myArray.join(""));
console.log(myArray.join(" Hi "));
console.log(myArray);


//write a loop to go through each individual item in the array

let i = 0;

while(i < myArray.length){
    console.log(i);
    console.log(myArray[i]);
    i++;
}