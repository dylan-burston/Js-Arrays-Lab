// Skip to content
//  Enterprise
// Search or jump to…

// Pull requests
// Issues
// Explore
 
// @dburston 
// Learn Git and GitHub without any code!
// Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


// sei-toronto
// /
// SEI-Flex-38
// Private
// 0
// 011
// Code
// Issues
// Pull requests
// Projects
// Wiki
// Insights
// SEI-Flex-38/w01/d3/js-arrays-lab.md

// Denis Week one with resources added to Flex 38
// Latest commit 89b05c5 4 days ago
//  History
//  0 contributors
// Executable File  218 lines (127 sloc)  4.69 KB
  


// // // JavaScript Arrays Lab
// // // Introduction
// // // This lab provides an opportunity to practice defining, accessing and manipulating arrays.

// // // Note: Feel free to reference the arrays lesson, collaborate, google, etc.

// // // Setup & Instructions
// // // Create a new HTML/CSS/JS repl on repl.it for these exercises.

// // // Title your repl JS Array Lab.

// // // Copy the exercises below into the repl's script.js file and code away!

// // // This lab is a DELIVERABLE. When completed, submit the link to your repl to your instructors.

// // // Exercise
// // /*
// // Exercise 1:
// // //   - Define an empty array named foods
// // */

// // Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result:\n',foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
// */

// // Complete Exercise 2 below...

foods.push("pizza", "cheeseburger")

console.log('Exercise 2 Result:\n',  foods);

// /*
// Exercise 3:
//   - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
// */

// // Complete Exercise 3 below...

foods.unshift("taco");

console.log('Exercise 3 Result:\n', foods);

// /*
// Exercise 4:
//   - Access the string 'pizza' (based upon its known position) in the foods array and assign it to a variable named favFood.
// */

// // Complete Exercise 4 below...

// in the array with 3 elements pizza is [1]
// the array foods will remain with pizza in it as it is a const, but still create a variable with pizza in it called favFood

let favFood = foods[1];

console.log('Exercise 4 Result:\n', favFood);

// /*
// Exercise 5:
//   - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
// */

// // Complete Exercise 5 below...

//pizza and cheeseburger are elements 1 and 2, need to splice at 2 position 

foods.splice(2, 0, "tofu");
console.log('Exercise 5 Result:\n', foods);


// /*
// Exercise 6:
//   - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
// */

// // Complete Exercise 6 below...

// splice by adding and subtracting in the [1] position 
foods.splice(1, 1, "sushi", "cupcake");

console.log('Exercise 6 Result:\n', foods);

// /*
// Exercise 7:
//   - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
//   - Assign the new array to a variable named yummy.
// */

// // Complete Exercise 7 below...


let yummy = foods.slice(1, 3); //slicing from element 1 to element 3(not inclusive)

console.log('Exercise 7 Result:\n', yummy);

// /*
// Exercise 8:
//   - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
// */

// // Complete Exercise 8 below...

let soyIdx = foods.indexOf("tofu");

console.log('Exercise 8 Result:\n', soyIdx);

// /*
// Exercise 9:
//   - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
//     'taco -> sushi -> cupcake -> tofu -> cheeseburger'
// */

// // Complete Exercise 9 below...

let allFoods = foods.join(" -> ");

console.log('Exercise 9 Result:\n', allFoods);

// /*
// Exercise 10:
//   - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
// */

// // Complete Exercise 10 below...

// console.log(foods.includes('soup')); //this works without assigning a new hasSoup variable to the boolean

let hasSoup = foods.includes("soup");

console.log('Exercise 10 Result:\n', hasSoup);

// /*
// Exercise 11:
//   - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
//   - Hint: Initialize the odds variable to an empty array before the iteration.
// */

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// // // Complete Exercise 11 below... 

let odds = []; 

nums.forEach(function(num) {
  if (num % 2) odds.push(num);
});

console.log('Exercise 11 Result:\n', odds);
// this one I had to look up the answer, I would like to go over it in class for a minute if we have time. Why is num mod 2 an odd number? is the computer assuming that the number exists and therefore must be odd? if it doesnt exist it would be even? 


// /*
// Exercise 12:
//   - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
//   	- Add to the fizz array if the number is evenly divisible by 3.
//   	- Add to the buzz array if the number is evenly divisible by 5.
//   	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
// */

// // Complete Exercise 12 below...

let fizz = [];
let buzz = [];
let fizzbuzz = [];

nums.forEach(function(num) {
  if (num % 3 === 0) fizz.push(num)  
  if (num % 5 === 0) buzz.push(num) 
  if (num % 3 === 0 && num % 5 === 0) fizzbuzz.push(num)
  });


console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

// let fizz = [];
// let buzz = [];
// let fizzbuzz = [];
// nums.forEach(function(num) {
//   if (num % 3 === 0) fizz.push(num)  
//   }else if (num % 5 === 0) buzz.push(num) {
//   }else if (num % 3 === 0 && num % 5 === 0) fizzbuzz.push(num);
//   }); This doesn't work and I'm not sure why. 
// /*
// Exercise 13:
//   - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
//   - Assume you don't know how many nested arrays numArrays contains.
// */

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];


// // Complete Exercise 13 below...
const numList = numArrays[numArrays.length - 1]; //Can you use lastIndexOf?


// let numList = numArrays[3]; //if you know the number of arrays 
console.log('Exercise 13 Result:\n', numList);

// /*
// Exercise 14:
//   - Given the above numArrays array, access the number 66 and assign to a variable named num.
// */

// // Complete Exercise 14 below...

 

const num = numArrays[2][1]; //How to do this if we don't know 66's position in the array 

console.log('Exercise 14 Result:\n', num);

// /*
// Exercise 15:
//   - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
//   - Hint: Be sure to declare and initialize the total variable before the iterations.
// */

// // Complete Exercise 15 below...

let total = 0;

//  numArrays.forEach(function(movie) {
//  	console.log(movie);
//  });
//  numArrays.forEach(function(movie) {
//  	console.log(movie);
//  });

numArrays.forEach(function(sum) {
  sum.forEach(function(num) {
    total = total + num;
  });
});
// // for (i = 0; i < numArrays.length; i++) {
// //   console.log(numArrays[i]);
// // } 


console.log('Exercise 15 Result:\n', total);
// Solution
// Try not to peek!

// Solution Repl

// Additional Resources
// MDN Arrays
// © 2021 GitHub, Inc.
// Help
// Support
// API
// Training
// Blog
// About
// GitHub Enterprise Server 2.22.6