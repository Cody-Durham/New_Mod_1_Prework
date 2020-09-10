/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

// EXAMPLE: Write code below that iterates through a list of animals and print
// each animal.
var animals = ["Zebra", "Giraffe", "Elephant"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// YOU DO: Write code below that iterates through a list of animals and prints "The
// <animal> is awesome!" for each animal.
for (var i = 0; i < animals.length; i++) {
  console.log("The " + animals[i] + 'is awesome!')
}

// YOU DO: Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var foods = ['Cake', 'Pizza', 'Salad', 'Donuts'];

for (var i = 0; i < foods.length; i++) {
  console.log("Add " + foods[i] + "to the shopping list.");
}

var dogSupplies = ['Brush', 'Clippers', 'Soap', 'Treats', 'Dog Food']
for (var i = 0; i < dogSupplies.length; i++) {
  console.log("I need to pick up " + dogSupplies[i] + " from the store.");
}

// YOU DO: Create an array of numbers and then iterate over that array to log double
// of each of the number. (Ex: 4 doubled is 8.)
var numbers = [3, 5, 6, 7, 13, 37];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// YOU DO: Using the array of names below, print out "Happy Birthday <name>" for
// each name except the first two.
//NOTES:
var names = ["Sevy", "Lindsey", "Jericho", "Raeonna", "Latrina", "Jhana", "Luca"];
//NOES: the var = i is setting the starting point (index) for the loop to run
// so var = 0: starts the loop at the beginning of the array or index (0)
// so var = 3: starts the loop at index 3.
// var = 2... Its like saying start the loop **AFTER** index 2
for (var i = 2; i < names.length; i++) {
  console.log("Happy Birthday " + names[i] + "!");
}
//output = "Happy Birthday Jericcho"
//output = "Happy Birthday Raeonna"
//output = "Happy Birthday Latrina"
//output = "Happy Birthday Jhana"
//output = "Happy Birthday Luca"

// THE FINAL YOU DO: Using the array of ages below, print out a statement for each age.
// The age should determine which message is printed out:
  // Under 18? "Oh no, you can't vote quite yet."
  // 18 or over? "Make sure you get out and vote!"

// WORD FROM THE WISE: Before you start coding, jot down, with pen and paper, what steps you
// want to tell the program to take. Think of all the concepts you've learned so far.

// Remember, stuck for 15-20 minutes? Reach out to your pre-work group on Slack.



//NOT CORRECT.. NEED TO COME BACK TO THIS QUESTION
var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];

for (var i = 0; i < ages.length; i++){                    // create a new loop and setting the index to 0
  if (ages[i] < 18) {                                     // start if loop. variable + index < 18
  console.log("Oh no, you can't vote quite yet.")         // console.log " cant vote"
} else {                                                  // else {}
  console.log("Make sure you get out and vote!")          // console.log "can vote"
}
}


//NOTE: Another pracitce example.
var oldEnough = [17, 20, 34, 18, 16, 65, 49, 10, 22, 15];
var responsible = true

for (var i = 0; i < oldEnough.length; i++) {
  if (oldEnough[i] < 21 && responsible === true) {
  console.log("You are not old enough to drink legaly.")
} else {
  console.log("You're old enough to drink.")
}
}
