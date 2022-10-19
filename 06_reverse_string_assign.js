
console.log("***************String reverse*****************");
function reverseString() {
    var str = "Hard work always pay back";
    var len = str.length-1;
    var reverseString = " ";
    for (let index = str.length; index >= 0; index--) {
        // console.log(str.charAt(index));
        reverseString = reverseString+str.charAt(index);
        
    }
        
    console.log( reverseString);
    
}
reverseString();

console.log("***************String reverse*****************");
function reverseString2(params) {
    var str2 = "Soon i will be Angular IT champ";
    var lengthStr=str2.length-1;
    var reverseStr=" ";
    for (let index = lengthStr; index >=0; index--) {
        // console.log(str2.charAt(index));
        reverseStr=reverseStr+str2.charAt(index);
        
        
    }
    console.log(reverseStr);
    
}
reverseString2();
