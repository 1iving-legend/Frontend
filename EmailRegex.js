
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
console.log();
console.log("UC2")
console.log();

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


//UC3
console.log();
console.log("UC3")
console.log();
const emailRegex3 = /^abc(\.\w+)?@bridgelabz\.co(\.\w+)?$/;

let testEmails3 = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc@bridgelabz.co.in",
    "abc.xyz@bridgelabz.co.in",
    "xyz@bridgelabz.co",
    "abc@xyz.co",
    "abc@bridgelabzcom",
    "abc@bridgelabz.com",
    "abc.xyz@bridgelabzco.in",
    "abcxyz@bridgelabz.co"
];

testEmails3.forEach(email => {
    console.log(`${email}: ${emailRegex3.test(email)}`);
});

//UC4
console.log();
console.log("UC4")
console.log();
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@bridgelabz\.co\.in$/;
    return regex.test(email);
}

console.log(isValidEmail("abc@bridgelabz.co.in"));       
console.log(isValidEmail("abc.xyz@bridgelabz.co.in"));    
console.log(isValidEmail("abc_xyz@bridgelabz.co.in"));    
console.log(isValidEmail("abc-xyz@bridgelabz.co.in"));   
console.log(isValidEmail("abc+xyz@bridgelabz.co.in"));   
console.log(isValidEmail("abc.xyz-123@bridgelabz.co.in"));

console.log(isValidEmail("abc#xyz@bridgelabz.co.in"));    
console.log(isValidEmail("abc xyz@bridgelabz.co.in"));    
console.log(isValidEmail("abc@xyz@bridgelabz.co.in"));    
console.log(isValidEmail("abc..xyz@bridgelabz.co.in"));


//UC5
console.log();
console.log("UC5")
console.log();

function isValid(email) {
    const regex = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@bridgelabz\.co\.in([a-zA-Z]{2})?$/;
    return regex.test(email);
}

console.log(isValid("abc@bridgelabz.co.in"));     
console.log(isValid("abc.xyz@bridgelabz.co.in"));    
console.log(isValid("abc_xyz@bridgelabz.co.in"));   
console.log(isValid("abc-xyz@bridgelabz.co.in"));  
console.log(isValid("abc+xyz@bridgelabz.co.in"));    
console.log(isValid("abc.xyz-123@bridgelabz.co.in"));


console.log(isValid("abc@bridgelabz.co.inus"));     
console.log(isValid("abc.xyz@bridgelabz.co.indk"));  

// Invalid cases
console.log(isValid("abc#xyz@bridgelabz.co.in"));   
console.log(isValid("abc xyz@bridgelabz.co.in"));  
console.log(isValid("abc@xyz@bridgelabz.co.in"));    
console.log(isValid("abc..xyz@bridgelabz.co.in"));   
console.log(isValid("abc@bridgelabz.co.inabc"));     
console.log(isValid("abc@bridgelabz.co.in1a"));     
