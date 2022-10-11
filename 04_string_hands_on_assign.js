
var stringHandson = function () {
    console.log("****************** 01 ***************");
var str = "   Hey you are doing good, keep it up   ";
console.log(str);

console.log("*************** 02 ***************");
var len = str.length
console.log("Length of string : ",len);

console.log("*************** 03 ***************");
var trimResult = str.trim()

console.log("Remove the extra space :",trimResult);

console.log("*************** 04 ***************");
var spa = len-trimResult.length;
console.log("The total number extra space remove :",spa); 

console.log("*************** 05 ***************");
var fir = trimResult.charAt("0");
var kir = trimResult.charAt(trimResult.length-1);

console.log("First character of trimresult :",fir);
console.log("Last character of trimresult :",kir);

console.log("*************** 06 ***************");
var stepSplit = trimResult.split(" ");
console.log("Total words available in the string after trim :",stepSplit.length);

console.log("*************** 07 ***************");
var god = str.indexOf("good")
console.log ("index of word Good in string  :",god);

console.log("*************** 08 ***************");
var pri = str.substring(22)

console.log("using substring :",pri);
var sli = str.slice(22)
console.log("using slice :",sli);

console.log("*************** 09 ***************");
var end = str.includes("up");
console.log(`Is string ends with word "up" :`,end);

console.log("*************** 10 ***************");
var start = str.includes("Hey");
console.log(`Is string starts with word "Hey" :`,start);


    
}
stringHandson();