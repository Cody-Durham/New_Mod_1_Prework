// ceasar_cipher
//
//
// var normalAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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






  var string = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
// makeSmall = string.toLowerCase();
// console.log(makeSmall);

function ceasarCipher3(alphabet) {
  for (var i = 0; i < alphabet.length; i++){
    console.log(alphabet[i].charCodeAt());
  }
}

ceasarCipher3("Mzy");
//_____________________________________________________________________________


var string = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'

function ceasarCipher3(alphabet) {
  var answer = "a ";
  for (var i = 0; i < alphabet.length; i++) {
    var num = alphabet[i].charCodeAt();
    if (num < 65 && num > 90) {
      answer += newNumber.fromCharCode(num + 3);
    }
  }
}
console.log(answer);
a
ceasarCipher3("A");


var string = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'

function rot13(str) {
  var solved = "";
  for (var=0; i<str.length; i++) {
    var asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromtCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum -13);
    }
    console.log(solved);
  }
}

rot13("A");











function ceasarCipher(alphabet) {
  for (var i=0; i<alphabet.length; i++) {
  var switchNum = (alphabet[i].charCodeAt()
 if (switchNum < 65 && switchNum > 90) {
   console.log("not yet")
  }
 }
}


















for (var i = 0; i < 3; i++);
  if (normalAlpha.length < 23) {
    console.log(changeAlphaA);
  }












111
