console.log(`01. Check whether given number is "Even" or "Odd" (45,70,67,98)`);
function evenOdd(num) {
    if (num%2==0) {
        console.log("Even");
        }else{
        console.log("Odd");
    }
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);
console.log("***********************************************************");
console.log(`02. Check if person is eligible for vote or not`);

function vote(num) {
    if (num>=18) {
        console.log("Eligible for vote");
         }else{
        console.log("not eligible for vote");
    }
    }
vote(18);
vote(20);
vote(17);
vote(40);
console.log("***********************************************************");
console.log(`Check if string contain more than 10 character or not Ex - "javaScript-ES6"`);

var str = "javaScript-ES6"
console.log(str);
var result = str.length
console.log(result);
if (result>10) {
    console.log("Contain more than 10");
    
}else{
    console.log("contain less than 10");
}
console.log("***********************************************************");
console.log(`Check if string starts with "java" Ex -"javascript Language`);
var str = "javaScript Language"
console.log(str);
var result = str.startsWith("java");
console.log(result);