
## HighLevelCC.md

**Step one:**
  :Write out alphabet in a string.
    There are 26 characters in the alphabet if you include only the uppercase. This is important so we can assign them to the .charCodeAt function I learned about.
    `var alphabet = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'`

**Step two: (thoughts)**
    :I was originally thinking that I need to .split this string up into separate elements so we can pull the information out later on, but I dont think we need to do this.  Im pretty sure we can just use the Acsii table that will assign each letter to a number, then use that data for the function.  


**Step three:**
:I need to make a function that says 'loop through the 26 letters in the alphabet' so we don't have to hard code anything like a = d, or g = j.  If we hardcoded it this way we would have to change the values of each variable every time we wanted to change it, and that wouldnt be very dynamic at all.

  - `for (var i = 0; i < alphabet.length; i++)`

**Step four:**
:I found this table from a guy on Youtube! We can look at the Ascii Table ![Here](http://www.asciitable.com/) and determine what letters === what number.
This will tell us that we need to include from capitol letter "A" (starts at 65) to letter "Z" (ends at 90). We can also find that the lowercase letters range from "a" (starts at 97) to "z" (ends at 122).  We now have numerical data that we can plug into the function.



**Step five:**
:We need to pass in the .carCodeAt method to the function 'alphabet' so it will understand the letters are assigned to numbers.
I was watching a guy on Youtube and he mentioned the method "charCodeAt". And Im pretty sure that charCodeAt takes the values of the alphabet and turns them into the Ascii numbers.



**Step six:**
:Now that the new method .charCodeAt that assigns our elements to a number, we can store that code in a variable and then write out a function with the _four_ loop.

`var switchNum = (alphabet[i].charCodeAt());

function ceasarCipher(alphabet) {
  for (var i = 0; i < alphabet.length; i++) {
    var switchNum = alphabet.length[i].charCodeAt();
  }
}
`
**Step seven:**
:Now that we've started the function with the for loop we can start passing in our parameters to tell the code what to do. I think if we say that if A-Z is higher than 65 AND lower than 90 then store that value in a new variable because we'll have to concatenate it together for a final output when we want to run it. So make a new variable called 'answer' above the for loop but still within the function.

`function ceasarCipher3(alphabet) {
  var answer = " ";
  for (var i = 0; i < alphabet.length; i++) {
    var num = alphabet[i].charCodeAt();
    if (num < 65 && num > 77) {
      answer += String.fromCharCode(num + 3);
    }
  }
`
**Step seven:**
:I was watching a guy online and I learned that we can use += to concatenate. Looks like I can take the result from the parameter (String.fromCharCode(num + 4)) and store that in the (answer) variable using += the concatenate operator.
Im not 100% here, but I messed around with his code he had written out and it looks '.String.fromCharCode' is something that javascript knows what to do with.  I tried to look it up but I dont exactly know what 'String. does'. If I had to guess, its a method telling javascript to 'do something' with the '.fromCharCode' nubmers that is stored in the code or internet somewhere inside of the function.

**Step eight**
:now we can continue to write the same parameters where if num is bigger than 78 and smaller than 90 then add that value to the 'answer' variable and concatenate it with 'String.fromCharCode' but we need to minus 3 from that number because we'll run out of alphabet and need to start from the back (z), otherwise it the value would return to a higher number from the Ascii table and wouldnt be a letter.

`function ceasarCipher3(alphabet) {
  var answer = " ";
  for (var i = 0; i < alphabet.length; i++) {
    var num = alphabet[i].charCodeAt();
    if (num < 65 && num > 77) {
      answer += String.fromCharCode(num + 3);
    } else if (num < 78 && num > 90) {
      answer += String.fromCharCode(num - 3);
    }
  }
`

**Step nine**
:Now we can add the last else statement and print the answer
`function ceasarCipher3(alphabet) {
  var answer = " ";
  for (var i = 0; i < alphabet.length; i++) {
    var num = alphabet[i].charCodeAt();
    if (num < 65 && num > 77) {
      answer += String.fromCharCode(num + 3);
    } else if (num < 78 && num > 90) {
      answer += String.fromCharCode(num - 3);
    } else{
      console.log(answer += i)
  }

}
`



:This is as far as I was able to get to really 'understand' the code and whats happening without fully copying his code. I left the example code below. Im a little confident how the +=, works but could use a bit more knowlage on it. Also, Im not fully sure what 'String.XXXXXX' does so perhaps more research or clarification is needed here as well.

___________________________________________________________________________________________________ <br>
- This is the code below that I was referencing while trying to figure out how to work with the code. Ive spent A LOT of time watching Youtube videos and doing research online and (for me) this was the best example that I could use as a reference. Ive taken it apart and messed with it for hours now, and really, the only thing that I dont fully understand is the 'String.fromCharCode' line.

`'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'

function rot13(str) {// LBH QVQ VG!
  var solved = "";
  for (var i = 0; i<str.length; i++) {
    var asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += str[i];
    }
  }
  return solved;
  }
  rot13("D")
`
___________________________________________________________________________________________________ <br>
**1st try**<br>
Here is my early work from the beginning of the problem. I thought about it and wanted to take it a different direction because I thought that I could hard code it to do what I wanted, but that isn't dynamic at all.

`// var normalAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// console.log(normalAlpha);
//
// var changeAlphaA = (normalAlpha.shift('A'));
// var changeAlphaB = (normalAlpha.shift('B'));
// var changeAlphaC = (normalAlpha.shift('C'));
//
// var addToEnd1 = normalAlpha.push('A');
// var addToEnd2 = normalAlpha.push('B');
// var addToEnd3 = normalAlpha.push('C');
//
//
// console.log(normalAlpha);
`

**2nd try&** <br>
Then I tried this direction to make an array, then split the array, then I was going to shift all the elements by 3, but decided that going down that direction I didnt fully know how to "shift" the array and return any of the values.

`2: write out some code to 'shift' the alphabet by X amount
  - `.shift` will remove elements from the beginning
    - *problem*: `.shift` only removes one element at a time? Hard code `.shift` 3 times..? not pretty.  *(can I make a function to do it?)*
    - -3 elements from the beginning of array
    - var normalAlph = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
    - //=> `A,B,C` [D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,,Y,Z] missing the A,B,C on front

  - `.push` will push new elements to the end
    - var changeAlph = normalAlph.push
    - console.log(normalAlph)
      //=>[D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,`A,B,C`] adding A,B,B to end
      `
