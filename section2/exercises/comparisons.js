/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log('Is the number of teachers > numberStudents?', numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log('Is the number of teachers equal to string teachers?', numberTeachers == stringTeachers);
/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log(numberTeachers === stringTeachers);
/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 10,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log(numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log(numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log(numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log(numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log(numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//On line 80, the satement of (4 < 9); is true because the integer 4 is less than the integer 9.

var books = 3;
console.log(4 < books);
// the keyword (var in this case) is setting the variable identifier to "books" while the operator (=, equal sign) is setting the the value
// of that variable to 3. Now that the variable has been declared we can write another statement and evaluate the value by using console.log operator.
// When the value of 4 is declared by the operator to be less than identifier (books = 3) then it will evaluate the the action as false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// the keyword (var) is setting the identifier (friends) with an assignment operator to the value equal to 6.
// the keyword (var) is setting the inentifier (siblings) with an assignment operator to the vale eaual to 2.
// we can evaluate the value of the statment of "friends"(6) is greater "than siblings"(2) using console.log, it will output a true boolean statment.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// the variable keyword (var) is settin g the variable name (attendees) with an assignment operator to a value of an integer (9).
// the variable keyword (var) is setting the variable name to (meals) and is assigning it to a value of 8 with an assignment operator.
// we can evaluate the value of the statment that attendees (9) is not equal to the value of meals (8) by using console.log.


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
// NOTE: the && operator will check the statement. If both of the conditions are **true** it will evaluate **true**!!!
// NOTE: the && operator will check the statement. If one of the statmets is **false** it will evaluate **false**!!!
// NOTE: I like to think of this as "if THIS ONE ****AND**** THIS ONE are true it will evaluate true, otherwise, nope, its going to be false"
console.log(isHungry && finishedHomework); // 'AND' OPERATOR

// Determine if the user is hungry and has completed their homework
// NOTE: the (double pipe?) || operator will check (test) at least one of the conditions of the statment. If one or more is **true** it will evaluate true!
// NOTE: I like to think of it like "im going to check the **left** side of the wall for truth, then Ill check the right side of the wall."
console.log(isHungry || finishedHomework); // 'OR' OPERATOR

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log('Does the dog love to play and loves treats?' + lovesToPlay && lovesTreats);//true (AND = &&)
// second example: console.lot('Does the dog love to play and loves treats?' + lovesToPlay || lovesTreats);//true

// Determine if the dog loves to play and loves the dog park
console.log('Does the dog love to play and also loves the park?' + lovesToPlay && lovesDogPark);//false (AND = &&)
// second example: console.log(lovesToPlay || lovesDogPark);//true

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);//true (OR = ||)

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <= 1);//true (AND = &&)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// The last line of code was checking the keyword identifier (lovesToPlay) AND also checking the keyword identifier
// (age) to see if both conditions are true because the logical operator is 'AND', it will check both sides to ensure both statments are 'true' .
// It will then evaluate the expression to be true. 

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? YEP!
