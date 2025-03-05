
//UC1
console.log("UC1")
const emailRegex = /^abc(\.\w+)?@bridgelabz\.co(\.\w+)?$/;

let testEmails = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc@bridgelabz.co.in",
    "abc.xyz@bridgelabz.co.in",
    "xyz@bridgelabz.co",
    "abc@xyz.co",
    "abc@bridgelabz.com",
    "abc.xyz@bridgelabzco.in",
    "abcxyz@bridgelabz.co"
];

testEmails.forEach(email => {
    console.log(`${email}: ${emailRegex.test(email)}`);
});



//UC2

console.log("UC2")

const emailRegex2 = /^abc(\.\w+)?@bridgelabz\.co(\.\w+)?$/;

let testEmails2 = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc@bridgelabz.co.in",
    "abc.xyz@bridgelabz.co.in",
    "xyz@bridgelabz.co",
    "abc@xyz.co",
    "abc@bridgelabz.com",
    "abc.xyz@bridgelabzco.in",
    "abcxyz@bridgelabz.co"
];

testEmails2.forEach(email => {
    console.log(`${email}: ${emailRegex2.test(email)}`);
});

