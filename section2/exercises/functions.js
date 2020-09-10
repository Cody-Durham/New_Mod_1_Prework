/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.

console.log('---------------------------------')


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log("Oh, Hello");
}
sayHello();
sayHello();
console.log('---------------------------------')
//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log('Hi there ' + name)
}
greetMe('Cody');
greetMe('Dave');
greetMe('Kile');

function anotherName(name) {
  console.log('Are you hungry ' + name + '?')
}
askUser('Steve');
askUser('Joe');
askUser('Matt');

function question(typeOfFood) {
  console.log('Ok, what would you like to eat?' + ' How about ' + typeOfFood);
}
getFoodChoice("some Tacos? ");
getFoodChoice("or maybe a Pizza? ");
getFoodChoice("14 beers for the night?");

console.log('---------------------------------')

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function addTogether(addition) {
  console.log(2 + addition);
}
addTogether(2);
addTogether(5);
addTogether(15);

console.log('---------------------------------')

function multTogether(multiply) {
  console.log(5 * multiply);
}
multTogether(3);
multTogether(5);
multTogether(16);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName + "!")
}
greet("Baby", "Waylon");
console.log('___________________________________________________________');

//___________________________________________________________________________
function nephew(name, throwsStuff) {
  console.log(name + throwsStuff);
}
nephew('Baby Waylon ', 'throws his toys like a gorilla');
console.log('___________________________________________________________');

//___________________________________________________________________________
function bikeRiding(jump, skid ) {
  console.log('My bike can ' + jump + ' then land and ' + skid);
}
bikeRiding('Jump like a rocket', 'skid to a stop!')
console.log('___________________________________________________________');

//___________________________________________________________________________
function playTime(helmet, space, stars, ship) {
  console.log('When I get into my rocket, I need to have ' + helmet + ' before I fly into ' + space +
  ' to look at the ' + stars + ' in my handmade ' + ship + '!');
}
playTime('my space helmet', 'the great universe', 'flashy stars and galixies', 'cordboard spaceship')
console.log('____________________________________________________________');

//NOTE: Code below is for reference only.
// function hairBand(bandName) {
//   console.log('The band ' + bandName + ' is still amazing!');
// }
// hairBand("Metalica");
// hairBand("Tears for Fears");
// hairBand("Prince");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
You can see in my 'addTogether' and 'multTogether' I didnt spell out the actuall name because,
A: Im lazy, and B: I thought that would be enough explination on what the function did.
*/
