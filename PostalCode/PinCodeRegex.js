

//UC1

const Regex= /[1-9][0-9]{5}/;

let check= Regex.test("500088");
console.log(check);


//UC2

const Regex2= /^[1-9][0-9]{5}/;
let check1= Regex.test("500088");
console.log(check1);
let check2= Regex.test("A00088");
console.log(check2);
let check3= Regex.test("A40088");
console.log(check3);
