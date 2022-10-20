let teacher = {
    teacherName: "Gajanan Kharat Sir",
    city: "Pune",
    degrees: {
        1: `IT Engineer`,
        2: `Adv Computting`,
        3: `Web Developer`,
    },

    Certificates: {
        Certificate1: "Hacker Rank participation",
        Certificate2: "Certificate in IFE course",
        Certificate3: "Certificate in Adv Programming",
    },

details: function() {
    let teacherDetails = `Concat of Certificates : ${this.Certificates. Certificate1},${this.Certificates. Certificate2},${this.Certificates. Certificate3}`
    return teacherDetails;

}
}
let tDetails = teacher.details();
console.log(`using Function and Concat :`, teacher.details());
console.log("*****************************************************************");

teacher.degrees =`Degree of teacher is :"IT Engineering","Adv Computting","Web Developer"`
console.log(teacher.degrees);
console.log("*****************************************************************");
console.log(`Certificates of teacher is :`,teacher.Certificates);
console.log("*****************************************************************");
console.log(teacher);
console.log("*****************************************************************");
console.log(`Certificate Before Delete :`,teacher.Certificates);
console.log("*****************************************************************");
delete teacher.Certificates;
console.log(`Certificate After Delete :`,teacher.Certificates);
console.log("*****************************************************************");
teacher.newCertificate = "Javascript and Data Stucture"
console.log(`Added new Certificates :`,teacher.newCertificate);
console.log("*****************************************************************");
console.log(`Before modify degrees :`,teacher.degrees);
console.log("*****************************************************************");
teacher.degreesModify =`"IT Engineering","Adv Computting","Angular Developer"`
console.log(`After modify degrees : Degree of teacher is :`,teacher.degreesModify);
console.log("*****************************************************************");





    





