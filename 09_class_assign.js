console.log("01. creat 5 objects from Vehical class and log on console");
class Vehicle{
    constructor (vahicalName, vehicalMileage,vehicalColor,vehicalPrice,vehicalRating ){
        this.vahicalName = vahicalName;
        this.vehicalMileage = vehicalMileage;
       this.vehicalColor = vehicalColor;
        this.vehicalPrice = vehicalPrice;
        this.vehicalRating = vehicalRating;
    }
    details(){
 console.log(`Vehical details : ${this.vahicalName} ${this.vehicalMileage} ${this.vehicalColor} ${this.vehicalPrice} ${this.vehicalRating}`);
    }

}
let vehicalA = new Vehicle("Toyota Fortuner", "8.0kmpl","Black","50.34 Lakh","****")
let vehicalB = new Vehicle("Maruti Swift","23kmpl","Red","5.92 Lakh","*****")
 let vehicalC = new Vehicle("Bugatti Veyron","6.8kmpl","White","12.00 Cr","*****")
 let vehicalD = new Vehicle("Tata Nexon","22.7kmpl","Orange","14.08 Lakh","****")
 let vehicalE = new Vehicle("Hyundai i20","20kmpl","Yellow","12 Lakh","***")
 console.log(vehicalA);
 console.log(vehicalB);
console.log(vehicalC);
console.log(vehicalD);
console.log(vehicalE);

console.log("********************************************************");

console.log("02. creat 4 objects from College class and log on console");

class College {
    constructor(CollegeName,CollegeCity,CollegeEstablished){
        this.CollegeName = CollegeName;
         this.CollegeCity = CollegeCity;
        this.CollegeEstablished = CollegeEstablished;
    }
    details(){
        console.log(`College details : ${this.CollegeName}  ${this.CollegeCity} ${ this.CollegeEstablished}`);
    }
}
let campusA = new College("DY patil","Pune","1984")
let campusB = new College("Ftccoe","Sangola","2013")
let campusC = new College("VJIT","Mumbai","1970")
let campusD = new College("COEP","Pune","1989")
console.log(campusA);
console.log(campusB);
console.log(campusC);
console.log(campusD);

console.log("********************************************************");
console.log("03. Call the traverse_object() function by passing for all instances of College class");

function traverse_object(object) {
    for (const key in campusA) {
        if (Object.hasOwnProperty.call(campusA, key)) {
            const element = campusA[key];
            console.log(`${key} ${element}`);
            }
    }
  }
traverse_object(campusA);
console.log("*****************************");
function traverse_object(object) {
    for (const key in campusB) {
        if (Object.hasOwnProperty.call(campusB, key)) {
            const element = campusB[key];
            console.log(`${key} ${element}`);
            }
    }
  }
traverse_object(campusB);
console.log("*****************************");
function traverse_object(object) {
    for (const key in campusC) {
        if (Object.hasOwnProperty.call(campusC, key)) {
            const element = campusC[key];
            console.log(`${key} ${element}`);
            }
    }
  }
traverse_object(campusC);
console.log("*****************************");
function traverse_object(object) {
    for (const key in campusD) {
        if (Object.hasOwnProperty.call(campusD, key)) {
            const element = campusD[key];
            console.log(`${key} ${element}`);
            }
    }
  }
traverse_object(campusD);
console.log("********************************************************");
console.log("04. WAF to print series till 7th occurrence");
let n1 = 0, n2 = 1, nextTerm;

console.log('==========Fibonacci Series 7th occurance=============>:');
// var number=7;
// for (let i = 1; i <= number; i++) {
//     console.log(n1);
  
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }



function fabo(myNumber) {
    if (myNumber == 0) {
        return 0;
    }
    if( myNumber == 1) {
        return 1;
    }
    let fN = 0; sN=1; nextN = fN + sN;
    
    for (let index = 0; index < myNumber; index++) {
        fN = sN;
        sN = nextN;
        nextN = fN + sN;
        console.log(nextN);
    }
}

fabo(7);


