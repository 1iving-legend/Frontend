

//UC1


console.log("UC1");

const Regex= /[1-9][0-9]{5}/;

let check= Regex.test("400088");
console.log(check);


//UC2
console.log("UC2");
const Regex2= /^[1-9][0-9]{5}/;
let check1= Regex2.test("500088");
console.log(check1);
let check2= Regex2.test("A00088");
console.log(check2);
let check3= Regex2.test("A40088");
console.log(check3);



//UC3

console.log("UC3");
const Regex3= /^[1-9][0-9]{5}$/;
let check4= Regex3.test("500088");
console.log(check4);
let check5= Regex3.test("A0008Z");
console.log(check5);
let check6= Regex3.test("A4008a");
console.log(check6);


//UC4

console.log("UC4");
const Regex4= /^[1-9][0-9]{2}\s?[0-9]{3}$/;
let check7= Regex4.test("500 088");
console.log(check7);
let check8= Regex4.test("822124");
console.log(check8);
let check9= Regex4.test("462 022");
console.log(check9);

