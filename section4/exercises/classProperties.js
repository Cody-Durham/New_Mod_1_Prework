/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class DogSupplies {
  constructor() {
  }
}
var dogCollar = 'pink';
var dogBooties = 'green';

console.log(dogCollar);
console.log(dogBooties);
//___________________________________________________________________________

// Prompt 2: Snack
class Chips {
  constructor() {
  }
}
var chips1 = "Cheetos";
var chips2 = "Doritos";

console.log(chips1);
console.log(chips2);
//___________________________________________________________________________

// Prompt 3: Shirt
class SweatShirt {
  constructor() {
  }
}
var sweatshirt1 = 'GreyColor';
var sweatshirt2 = 'RedColor';

console.log(sweatshirt1);
console.log(sweatshirt2);

class SweatShirt {
  constructor(longSleeves, hasHood, cotton) {
    this.type = longSleeves;
    this.hoodType = hasHood;
    this.material = cotton;
  }
}

//-------------------\
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class DogSupplies {
  constructor(cost, durationUsed, wouldUseAgain) {
    this.price = cost;
    this.timeUsed = durationUsed;
    this.buyAgain = wouldUseAgain;
  }
}
var dogCollar = 'PinkColor';

console.log(dogCollar);
//___________________________________________________________________________

// Prompt 2: Snack
class Cheese {
  constructor(typeOfCheese, flavor, cost) {
    this.type = typeOfCheese;
    this.flavor = flavor;
    this.cost = cost;
  }
}
var habaneroCheese = 'Is hot';
console.log(habaneroCheese);
//___________________________________________________________________________

// Prompt 3: Shirt
class BlueShirt {
  constructor(color, shirtType, size) {
    this.color = color;
    this.typeOfShirt = shirtType;
    this.sizing = size;
  }
}
var colorOfShirt = 'Blue';
console.log(colorOfShirt);


//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DogSupplies {
  constructor(cost, durationUsed, wouldUseAgain) {
    this.price = cost;
    this.timeUsed = durationUsed;
    this.buyAgain = wouldUseAgain;
  }
}
var dogCollar = new DogSupplies (30, '6 Months', 'Yes');
console.log(dogCollar);

var huntingVest = new DogSupplies (80, '5 Days', 'Yes');
console.log(huntingVest);

var dogBooties = new DogSupplies (50, '40 Days', 'No');
console.log(dogBooties);
//___________________________________________________________________________
// Prompt 2: Snack
class Chips {
  constructor(healthy, scaleOfMessyness, flavor) {
    this.isHealthy = healthy;
    this.messyness = scaleOfMessyness;
    this.flavorType = flavor;
  }
}
var cheetos = new Chips ('No', 'Very Messy', 'Nacho Cheese');
console.log(cheetos);

var doritos = new Chips ('Possible?', 'Not too crumbly', 'Salsa Verde');
console.log(doritos);

var natureChips = new Chips ('Yes', 'Not messy', 'Medititerranean');
console.log(natureChips);
//___________________________________________________________________________
/*
class candyBar {
  constructor(cost, madeWithNuts, type) {
    this.cost = cost;
    this.nuts = madeWithNuts;
    this.type = type;
  }
}
var snickers = new candyBar (2.50, 'Yes', 'Snickers Mini');
console.log(snickers);

var recies = new candyBar (2.62, 'No', 'Recies Peanutbutter Cup');
console.log(recies);
*/
//___________________________________________________________________________
// Prompt 3: Shirt
class SweatShirt {
  constructor(longSleeves, hasHood, cotton) {
    this.longSleeves = longSleeves;
    this.hoodType = hasHood;
    this.material = cotton;
  }
}
var oldSweatshirt1 = new SweatShirt ('Yes', 'Kinda', 100)
console.log(oldSweatshirt1);

var oldSweatshirt2 = new SweatShirt ('Nope!', 'Yes', 80);
console.log(oldSweatshirt2);
