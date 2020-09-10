/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);
//output = [3]

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2] = 'Gorilla';
console.log(animals);
//output = ["Zebra", "Giraffe", "Gorilla"]
//MY NOTES: The '2' inside the brackets is telling the code to put 'Gorilla' in index #2

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push = "Mouse";
console.log(animals);
//output = ["Zebra", "Giraffe", "Elephant", "Mouse"]
//MY NOTES: ".push" is telling the code to add another element to the 'END' of the arrays.
    // I like to think of it as "Hey you! Add another box to the stack and PUSH it to far back."

// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(animals[2]);
//output = 'Elephant'
//MY NOTES: This is telling the code to insert the string "Elephant" inside the index of #2

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ['Pizza', 'Nacos', 'Tacos', 'Pita'];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);
//output = [4]

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push('Broccoli');
console.log(foods);
// output = ['Pizza', 'Nacos', 'Tacos', 'Pita', 'Broccoli'];

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);
//    OR
foods.pop('Broccoli');
console.log(foods);
//output = ['Pizza', 'Nacos', 'Tacos', 'Pita']

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.unshift('Lettuse', 'Beer', 'Cheese');
console.log(foods);


console.log(foods);
//output = ['Lettuse', 'Beer', 'Cheese','Pizza', 'Nacos', 'Tacos', 'Pita']

// YOU DO: Remove the food that is in index position 0.
console.log(foods.shift());
console.log(foods.shift('Lettuse'));
//output = 'Beer', 'Cheese','Pizza', 'Nacos', 'Tacos', 'Pita']

//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: Chase app. = Arrays are used for listing out activity on the accout such as purchases or withdrawls.
// 2: Slack = Arrays might be used for holding the data of my direct messages and my channels.
// 3: MY HOA = (I just paid my HOA..) so they're using arrays to keep track of the payments Ive given


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

if (percentBatteryLeft >= 15 || hasCharger === true || chargerType === 'car') {
  console.log("You can call an Uber and charge your phone!")
} else {
  console.log("You can not call an Uber")
}
//old version below.
// if (percentBatteryLeft < 15 && hasCharger === true && chargerType === 'car') {
//   console.log("Aint gonna happen 'guy', not enough juice for an Uber.")
// } else if (percentBatteryLeft >= 15 && hasCharger === true && chargerType === 'car') {
//   console.log("You can call an Uber and charge your phone!")
// }

//My practice below:____________________________________________________________
var brushingTime = 10;
var haveBrush = true;
var dogWillStay = true;
var dogWillRun = false;

console.log("Do you have everything you need to brush your dog? ")

if (brushingTime <= 20 && haveBrush === true && dogWillStay === true && dogWillRun === false) {
  console.log('Nope, you need more time to brush the hair.')
} else if (brushingTime >= 20 && haveBrush === false && dogWillStay === true && dogWillRun === false) {
  console.log('You dont have a brush, how do you plan to brush your dog?')
} else if (brushingTime >= 20 && haveBrush === true && dogWillStay === false && dogWillRun === true) {
  console.log('Your dog is going to run away as soon as you get the brush!')
} else if(brushingTime >= 20 && haveBrush === true && dogWillStay === true && dogWillRun === false) {
  console.log('Yep!, I have the time and all the stuff I need to brush my dog... she needs it!')
} else {
  console.log('Im not sure?')
}

//Notes below:
// The keyword is setting up the statement and we are writing out the conditions below.
if (brushingTime <= 20 && haveBrush === true && dogWillStay === true && dogWillRun === false) {

  //If one or more of these conditions are NOT met it will return the below line.
  console.log('Nope, you need more time to brush the hair.')

  //Now because the conditions have changed,(below) the code is checking them against the variables. If the above lines conditions are not method
  //the it will check this line.
} else if (brushingTime >= 20 && haveBrush === false && dogWillStay === true && dogWillRun === false) {

  //Now the conditions have changed. so the code is checking the conditions against the variable for truthness.
  //if the parameters on line above are not met then it will return the below string.
  console.log('You dont have a brush, how do you plan to brush your dog?')

  ////Now because the conditions have changed,(below) the code is checking them against the variables. If the above lines conditions are not method
  // the it will check this line.
} else if (brushingTime >= 20 && haveBrush === true && dogWillStay === false && dogWillRun === true) {

  //Now the conditions have changed above, So the code is checking the conditions against the variable for truthness.
  //if the parameters on line above are not met then it will return the below string.
  console.log('Your dog is going to run away as soon as you get the brush!')

  //Now because the conditions have changed,(below) the code is checking them against the variables. If the above lines conditions are not method
  //the it will check this line.
} else if(brushingTime >= 20 && haveBrush === true && dogWillStay === true && dogWillRun === false) {

  //Now the conditions have changed above, So the code is checking the conditions against the variable for truthness.
  //if the parameters on line above are not met then it will return the below string.
  console.log('Yep!, I have the time and all the stuff I need to brush my dog... she needs it!')

// if none of the above statments and conditions match then this last else below statment will run.
} else {
  console.log('Im not sure?')
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
