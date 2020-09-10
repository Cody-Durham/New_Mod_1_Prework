/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
**Answer**
Line 17 is the end of the if/else statment and its saying that if the condition above is not met (doorChoice === 1) then print the
value or string of bearClothing ('scarf')

2. What variable has a new value assigned to it after the first if statement executes?
**Answer**
bearClothing. Because it was declared an empty string above in the variable, we can now reasign it without having to declare it again

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
**Answer**
The bearClothing choice would change to "scarf". If the variable 'doorChoice === 3' that means it does not equal 1 (as
written in the if/else statment) so it would return bearClothing = "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
**Answer**
If the conditions from the first two else/if statments are not 'true' then the code will keep running
until it his line 30/31 and will console.log the string "You run as fast as you can into the next room. It's full of snakes". If none of the conditions match the
variables then line 33-35 will console.log "You stay with the bear and become it's best friend!" 
Line 36 = blank
Line 37 is the beginning of a comment (/*)
Line 38 is the beginning of the comment starting with "Questions"


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
**Answer**
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
**Answer**
"You tell the bear the " + bearClothing + " is too small and it starts to cry!"

7. What is your favorite ending?
**Answer**
My favorite is to stay with the bear and become friends!!
*/
