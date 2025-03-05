

//UC1


console.log("UC1");

const Regex= /[1-9][0-9]{5}/;

let check= Regex.test("400088");
console.log(check);


//UC2
console.log("UC2");
const Regex2= /^[1-9][0-9]{5}/;
let check1= Regex.test("500088");
console.log(check1);
let check2= Regex.test("A00088");
console.log(check2);
let check3= Regex.test("A40088");
console.log(check3);



//UC3

console.log("UC3");
const Regex3= /^[1-9][0-9]{5}$/;
let check4= Regex.test("500088");
console.log(check1);
let check5= Regex.test("A0008Z");
console.log(check2);
let check6= Regex.test("A4008a");
console.log(check3);

