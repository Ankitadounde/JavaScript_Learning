console.log("01 ***************Square****************");
var squ = function (arg1,arg2,arg3,arg4) {
    console.log("square of 5 =",arg1*arg1);
    console.log("square of 6 =",arg2*arg2);
    console.log("square of 25 =",arg3*arg3);
    console.log("square of 100 =",arg4*arg4);
}
squ(5,6,25,100);

console.log("02 **********Log type of function**********");

    
    

console.log("Data type of function :-",typeof squ);

console.log("03********** Area of a triangle***********");
var tri = function(base,height) 
{
    console.log("Area of a triangle =",1/2*base*height);

    }
tri(45,34);

console.log("04 **********Area of a rectangle**********");
var rect = function (length,width)
 {
    console.log("Area of a rectangle =", length*width);
    
}
rect(499,917);

console.log("05 ***************Swap Values***************");
var swap_values=function(arg1,arg2)
 {
    console.log("-----before swap-----");
    console.log(arg1,arg2);
    console.log("-----After swap-----");
   var temp = arg1;
    arg1 =arg2;
    arg2 = temp ;
    console.log(arg1,arg2);
    
}
swap_values("Virat","Anushka");
swap_values(1000,2000);

console.log("06 ***********Perform below step**********");


    var str = "JavaScript the most popular language"
    console.log(str);

    console.log("A) Find the total character available in the string");
    var len = str.length;
    console.log(len);

    console.log("B) Find the index of character -'S'");
    var ind = str.indexOf("S");
    console.log(ind);

    console.log("C) Find the index of string 'lang'");
    var ind = str.indexOf("lang");
    console.log(ind);
   

    console.log("D) Find the last character using length property");
    var char = str.charAt(str.length-1);
    console.log(char);
   

   console.log("E) Find the 3rd last character using length property");
   var char = str.charAt(str.length-3);
   console.log(char);

  


    




