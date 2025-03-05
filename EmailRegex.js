
//UC1
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
