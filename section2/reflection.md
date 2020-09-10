## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
**Answer**
- I tend to try and figure thing out a little too long, then Ill usually ask for help. Ill have to work on not taking so long.  I know that I tend to take a little longer than other students while figuring things out so its going to be tough to learn so much so quickly.


2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
**Answer**
- It feels uncomfortable to not have 100% support in anything new, so yea, its not a great feeling.  I was having issues with my terminal earlier and the code was not returning my output, but I figured it out.. thats the point Im sure yall are trying to get us at, where we can be self sufficient, I get it.

3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
**Answer**
- A conditional statement is where the user can input a some data and the code can take multiple routes to find and output the correct answer. Any webpage is going to have these. Take a password generator on a site for example. If the password contains the correct amount of characters then it will pass (true) otherwise (_else/if_) if it dosent pass the truness it will return a alert to 'try again'

4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
**Answer**
- To add multiple 'if' conditions you need to add the AND logical operator or the OR logical operator in conjunction with the == operator within each condition.
- The && (AND) operator will look to see if **'this'** AND **'this'** are true. If one or more is true then it returns 'true'
- The || (OR) operator will check both conditions and **only one side of the pipes** is true it will return 'true' <br>
  I think of it as a wall, and if someone is on the other side then yes, its true that there is someone inside the house

5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
**Answer**
- Ive been using the browser console to check all my statements and blocks of code. <br>
  Im not really sure what other means we could check the code?

6. In your own words, what is the purpose of a function?
**Answer**
- A function will store specific data and then allow us to 'call' it later on without having to type the same code over and over. Im sure this will save a ton of time and confusion while working on projects.

7. What is a parameter? What is an argument? Why would you use one? Provide an example of a function that accepts an argument (declaration and call), and indicate what the parameter is and what the argument is.
**Answer**
- **Parameters** are the like the variables of a function. We need to 'pass in' the parameters after the function has been declared inside of the parentheses ().
- **Arguments** are the actual values we need to 'pass in' to use after the function has been declared. These are the actual data that the function parameters will use to run. <br>

```
function minForStanding(time) {
  console.log('You should stand for ' + time + ' minutes');
}
minForStanding(5);
```
> The code above shows the parameter of 'time' getting passed in while the argument 'minForStanding' is called outside of the function.
- Declaration - 'minForStanding'
- Parameter - (time)
- Call - we're calling on the parameter (time)
- Argument - minForStanding(5);


8. What questions do you still have about `if` statements and/or functions?
**Answer**
- Does there need to be an _else_ condition at the very end of an _if/else_ statement? You can see in the code below I dont have a final _else_ statement and it seemed to work fine.

```
var numQuarters = 3;

// Write your conditional here
if (numQuarters <= 0) {
  console.log('I dont have enough money for a gumball');
} else if (numQuarters <= 1) {
  console.log('I dont have enough money for a gumball');
} else if (numQuarters <= 2) {
  console.log('I have enough money for a sweet gumball!')
} else if (numQuarters >= 3) {
  console.log('I have enough money for a sweet gumball!');
}
```
