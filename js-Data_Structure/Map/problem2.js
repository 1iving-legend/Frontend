/*Write a Program to generate a birth month of 50 individuals

between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print. */

function generate()
{
    return Math.floor(Math.random()*12+1);
}

let data= new Map();

for(let i=1;i<=12;i++)
{
    data.set(i,[]);
}

for(let i=1;i<=50;i++)
{
    let month=generate();
    data.get(month).push(i);
}

console.log(data.entries());