console.log("01. Function result for check maleMarriageEligibility using ternery operator. ");
   function maleMarriageEligibility(gender, age, boyName) {
    
    var result = gender && age >=21 ? `Hey ${boyName} you are eligible for Marriage` :
     `Hey ${boyName} you are not eligible for Marriage` 
     console.log(result);
    }
maleMarriageEligibility ("male",25,"Billates");
maleMarriageEligibility ("male",17,"Stew Jobs");

console.log("*************************************************");

console.log("02. Function result for check femaleMarriageEligibility using if block. ");
 function femaleMarriageEligibility (gender, age, girlName) {
    


if (gender && age>=18) {
    console.log(`Hey ${gender} you are eligible for Marriage`);
    
}else{
    console.log(`Hey ${gender} you are not eligible for Marriage` );

}
}
femaleMarriageEligibility ("jenifer",16,"female");
femaleMarriageEligibility ("Malinda Gates",27,"female");

