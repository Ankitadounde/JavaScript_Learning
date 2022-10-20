console.log(`01. Count the total number vowels using includes() for string - I am very good IT Developer`);
function vowelsCount(arg1) {
    var str = "I am very good IT Developer"
    var lowerCase = "aeiou";
    var upperCase = "AEIOU";
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index)
        var islowerCaseAvaible = lowerCase.includes(char);
        var isupperCaseAvaible = upperCase.includes(char);
        if (islowerCaseAvaible || isupperCaseAvaible) {
            count = count + 1
}
}
    console.log(`Total vowels count : ${count}`);

} vowelsCount();
console.log("*******************************************************************************");
console.log(`02. Write a function to get the sum of cube of numbers from 1 to 5`);
function cubeAddition(arg1) {
    var num = 0;
    for (let index = 1; index <= 5; index++) {
        var cube = index * index * index;
        var num = num + cube;
    }
    console.log(`the sum of cube numbers from 1 to 5 : ${num}`);

}
cubeAddition();
console.log("*******************************************************************************");
console.log("03. Log only odd position chars on console log and do not consider empty space");
var str1 = "Hard work always pays back";
var str2 = "Soon i will be Angular IT champ"
function oddPositionChar(str) {
    var result = " ";
    for (let index = 0; index < str.length; index++) {
        if (index % 2 != 0 && str.charAt(index) != " ") {

            result = result + str.charAt(index);
        }
    }
    return result;

}
var ans = oddPositionChar(str1);
var result1 = oddPositionChar(str2);
console.log("Hard work always pays back");
console.log(ans);
console.log("Soon i will be Angular IT champ");
console.log(result1);

