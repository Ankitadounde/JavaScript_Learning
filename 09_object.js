let variable_name = "";
let person ={
    fullName: "Sachin Tendulkar",
    city: "Mumbai",
    age:"42",
    isMarried: true,
    address:{
        street:"AS Club",
        pin_code:"413307",
        city:"pune",
        state:"MH",
        eat:function(){
            console.log("Iam vegetarian");
        },
        walk: function() {
            console.log("I do walk everyday");
            
        },
        details:function(){
            let personDetails = `Details are :${this.fullName},${this.age},${this.address.citty}`
            return personDetails;
        }


        
    }
}

person.pincode=413307
person.profession="cricketer"
delete person.age
person.address.landMark="near temple"
console.log(person);
console.log(person.address.street);
person.address.eat();


console.log(person);
let personFullName = person.fullName;
console.log(personFullName);
// person["city"]
console.log(person["city"]);
console.log(person["age"]);
console.log(person. return);