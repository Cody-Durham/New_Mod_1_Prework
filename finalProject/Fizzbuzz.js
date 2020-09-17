Fizzbuzz


//For some reason (I cant figure out yet) this code below dosent print correctly.
//I know it has something to do with the last if statement because when it prints
//'fizzbuzz' that value is taking up a line or number and then the #s progrssivly
//get more off.
var number1 = 'fizz'
var number2 = 'buzz'
var number3 = 'fizzbuzz'

for (var i = 0; i < 100; i++) {
  if(i%3 === 0) console.log(number1);
  if(i%5 === 0) console.log(number2);
  if(i%3 === 0 && i%5 === 0)  console.log(number3 || i);
  else {
      if(i%3 !== 0 && i%5 !== 0) console.log(i);
  }
}
//__________________________________________________________________________
//Try 14:Works. Took a while to get here.
for (var i=1; i < 101; i++){
  if (i % 15 == 0)
    console.log('FizzBuzz');
  else if (i % 3 == 0)
    console.log('Fizz');
  else if (i % 5 == 0)
    console.log('Buzz');
  else {
    console.log(i)
  }
}
//__________________________________________________________________________
//Try11:
// for (var i = 0; i < 100; i++) {
//   if (i % 3 === 0) console.log('fizz');
//   else if(i % 5 === 0) console.log('buzz');
//   else if(i % 15 === 0) console.log ('fizzBuzzzzz');
//   console.log(i)
// }
//
// for (var i = 1; i < 101; i++) {
//   if (i % 3 === 0) console.log('Fizz');
//   else if (i % 5 === 0) console.log('Buzz');
//   else if (i % 15 === 0) console.log('FIZZBUZZ');
//   console.log(i);
// }


//__________________________________________________________________________
//Try10:
// var number1 = 'fizz'
// var number2 = 'buzz'
// var number3 = 'fizzbuzz'
// // var message = '';
// for (var i = 0; i < 100; i++) {
//   if(i%3 === 0) console.log(number1);
//   if(i%5 === 0) console.log(number2);
//   // if(i%3 === 0 && i%5 === 0)  console.log(message);
//     console.log(i);
// }


//__________________________________________________________________________
//Try 8: nope.
// var number1 = 'fizz'
// var number2 = 'buzz'
// var number3 = 'fizzbuzz'
//
// for (var i = 0; i < 100; i++) {
//   if (i%3 === 0 && i%5 === 0) console.log(number3);
// }
//__________________________________________________________________________

/*
Below is code that Ive taken and modified from somewhere online. The code above
is all mine and not as clean but dosent seem to work 100 so I was trying to combine the two.
*/
// for (var i = 0; i <= 100; i++) {
//   var message = '';
//   if (i%3 === 0) message = 'fizz';
//   if (i%5 === 0) message = 'buzz';
//   if (i%3 === 0 && i%5 === 0) message = "fizzBuzz"
//   console.log(message || i);
// }
//
// for (var i = 0; i < 100; i++) {
//   var number = '';
//   if (i%3 === 0) number = 'Fizz';
//   if (i%5 === 0) number = 'Buzz';
//   if (i%3 === 0 && i%5 === 0) number = 'fizzBuzzzzzzzz'
//   console.log(number || i);
// }


//__________________________________________________
//Try 6 with classmate.
// var number = 15
//
// for (var i = 0; i <= 100; i++)
// console.log(number[i])
// //var number = new Array ();
// while (number <= 100) {
// if (number % 3 === 0) {
// console.log("Fizz");
// } else if (number % 5 === 0) {
// console.log("Buzz");
// } else if (number % 5 === 0 && number % 3 === 0) {
// console.log("FizzBuzz");
// } else {
// console.log(number[i]);
// };
// number++
// }
