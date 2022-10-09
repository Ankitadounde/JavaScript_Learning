console.log("01 =============== two function with no arguments ===============");
function live_pune() {

   console.log(" Radhika live in Pune.");
   console.log(" Ram also live in pune.");
    
}
live_pune();



console.log("02 =============== with concat ===============");
function concat(firstName,lastName)
 {
    console.log(firstName+lastName);
    
}
concat("Ankita"," Dounde")




console.log("03 =============== two arguments with swap values ===============");
function swap_values(arg1,arg2) {
    console.log("-----before swap-----");
    console.log(arg1,arg2);
    console.log("-----After swap-----");
   var temp = arg1;
    arg1 =arg2;
    arg2 = temp ;
    console.log(arg1,arg2);
}
swap_values ("Virat","Anushka");
swap_values (1000,2000);


console.log("04 =============== Addition ===============");
function add_three_numbers(arg1,arg2,arg3)
 {
    
        console.log(arg1 + arg2 + arg3);
 }
    
 add_three_numbers(10.23, 600, 40);
 add_three_numbers("Hello"," Good" ," Morning")
