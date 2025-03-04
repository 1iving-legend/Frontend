

let prompt= require("prompt-sync")();

let num= prompt("Enter a number : ");


let arr= new Array();

for(let i=1; i<=num/2;i++)
{
    if(num%i==0)
    {
        arr.push(i);
    }
}
console.log("Factors are : "+arr);