console.log(`01.Reverse the complete string and ignore the space while reversing`);
    var str1 = "Hard work always pays back";
    var str2 = "Soon i will br Angular IT champ";
    function reverse(str)
     {
        var res = " ";
        for (let index = str.length; index  >=0; index--)
         {
            if (str.charAt(index) !=" ")
             {
                res = res + str.charAt(index);
                }
           
            }
        return res;
        
    }
console.log(`0.1 Hard work always pays back :`,reverse(str1));
console.log("*****************************************************************");
console.log(`0.2 Soon i will br Angular IT champ ;`,reverse(str2));