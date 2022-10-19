console.log(`"01. Count the total number vowels using includes() for string → “Good Morning IT Champ"`);
function vowels(str) {
    var myString = "Good Morning IT Champ";

    var vowelLowerCase = "aeiou"
    var vowelUpperCase = "AEIOU"
    var vowelCount = 0;
    for (let index = 0; index < myString.length; index++) {
        var char = myString.charAt(index);
        var islowerCaseAvaible = vowelLowerCase.includes(char);
        var isupperCaseAvaible = vowelUpperCase.includes(char);
        if (islowerCaseAvaible || isupperCaseAvaible) {
            vowelCount = vowelCount + 1;
        }
       }
    console.log(`Total Vowels count : ${vowelCount}`);
}
vowels();
console.log("********************************************************");
console.log(`"02. Count the total number vowels using includes() for string → “I love JavaScript"`);

function countVowels(str1) {
    var str = "I love JavaScript"
    var vowelLowerCase = "aeiou"
    var vowelUpperCase = "AEIOU"
    var vowelCount = 0;
    
   
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        var islowerCaseAvaible = vowelLowerCase.includes(char);
        var isupperCaseAvaible = vowelUpperCase.includes(char);
        

            
            if (islowerCaseAvaible || isupperCaseAvaible) {
                vowelCount = vowelCount + 1;
            }
           }
        console.log(`Total Vowels count : ${vowelCount}`);
    }
    countVowels();

console.log("********************************************************");
console.log("03. Write a function expression to sum all numbers from 1 to 10");
var count = 0
for (let index = 1; index <= 10; index++) {
    count = count + index;
}
console.log(`Addition is : ${count}`);


console.log("********************************************************");
console.log("04. Write a function to get the sum of square numbers from 1 to 5");
function additionSquare() {
    var num = 0
    for (let index = 1; index <= 5; index++) {
        var square = index * index;
        num = num + square
    }
    console.log(`the sum of square numbers from 1 to 5 : ${num}`);

}
additionSquare();

console.log("********************************************************");
console.log("05.1 Log only even positioned chars on console and do not consider empty spaces");
var str1 = "Hard work always pays back";
var str2 = "Soon i will be Angular IT champ"
function evenPositionChar(str) {
    var result = " ";
    for (let index = 0; index < str.length; index++) {
        if (index % 2 == 0 && str.charAt(index) != " ") {
            result = result + str.charAt(index);
        }
    }
    return result;
}
var ans = evenPositionChar(str1);
var result1 = evenPositionChar(str2);
console.log(ans);
console.log(result1);
console.log("********************************************************");
console.log("05.2.  Log only odd positioned chars on console and do not consider empty spaces");
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
console.log(ans);
console.log(result1);





