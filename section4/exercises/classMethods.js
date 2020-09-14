/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(protien, base, toppings) {
    this.protien = protien;
    this.base = base;
    this.toppings = toppings;
  }

  changeProtein() {
    this.protien = "pork";
  }
  addTopping() {
  this.topping = "salsa";
  }
}

var chickenBurrito = new Burrito("chicken", "lettuse", "tomatoes")
console.log(chickenBurrito);
chickenBurrito.changeProtein();
console.log(chickenBurrito);

var smotheredBreakfast = new Burrito("eggs", "hashbrowns", "greenChili")
console.log(smotheredBreakfast);
smotheredBreakfast.addTopping();
console.log(smotheredBreakfast);


var beefBurrito = new Burrito("beef", "brownRice", "cheese")
console.log(beefBurrito);
beefBurrito.addTopping();
console.log(beefBurrito);
