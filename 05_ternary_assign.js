console.log("****************** 01 ********************");
console.log("1.1. Find the greatest number among two number");
var gre = function (num1,num2) {
   var result = num1 > num2 ? num1 : num2;
    console.log("Greatest number :",result);
}
gre(10,-10);
gre(800,899);

console.log("****************** 02 ********************");
console.log("2.1. Check the given number is even or odd (29,44,0,101)");
var num = function (num1) {
  var result =  num1%2==0 ? true : false;
  console.log(result);
}
num(29);
num(44);
num(0);
num(101);

console.log("****************** 03 ********************");
console.log("3.1. Check which word has even or odd length(javaScript,Developer,Google)");
var exp = function (arg1) {
    var len = arg1.length;
    console.log("word length:",len);
    
    var result = len%2==0 ? "Even" : "Odd" ;
    console.log(`${result}`);
    }
exp("javaScript");
exp("Developer");
exp("Google");


