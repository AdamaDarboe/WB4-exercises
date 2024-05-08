"use strict"



let personalInfo ={

name: "Adama Darboe",
address: "123 Supper Fly Dr.", 
City: "Atlanta",
state:"GA",
zip:"12345"

};


function printContact(personalInfo){
console.log (personalInfo.name);
console.log (personalInfo.address);
console.log(personalInfo.City);
console.log (personalInfo.state);
console.log(personalInfo.zip);
}
printContact(personalInfo);