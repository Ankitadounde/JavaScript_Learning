console.log("****************** 01 ********************");
var wordLenghtSquare = function (word) {
  var wordLength = word.length;
  console.log(`Given word "javaScript"`);
  console.log("Length og given word :", wordLength);
  return wordLength * wordLength;
}
console.log("Length of square of given word :", wordLenghtSquare("javaScript"));

console.log("*****************************");

var wordLenghtSquare = function (word) {
  var wordLength = word.length;
  console.log(`Given word "Google"`);
  console.log("Length og given word :", wordLength);
  return wordLength * wordLength
}
console.log("Length of square of given word :", wordLenghtSquare("Google"));

console.log("*****************************");

var wordLenghtSquare = function (word) {
  var wordLength = word.length;
  console.log(`Given word "Developer"`);
  console.log("Length og given word :", wordLength);
  return wordLength * wordLength;
}
console.log("Length of square of given word :", wordLenghtSquare("Developer"));

console.log("***************** 02 **********************");
var str = "I am Angular Developer";
console.log(str);
var len = str.length;
console.log("Given string length :", len);
var spl = str.split(" ")
console.log("The total no. of words available in given string", spl.length);
var result = len / spl.length;
var result1 = len * spl.length;
console.log("String length diveded by total no.of word in given string :", result);
console.log("String length into total no.of word in given string :", result1);










