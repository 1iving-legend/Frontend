
let arr= new Array();
for(let i=10;i<100;i++)
{
    
    let a=i%10;
    let b=parseInt(i/10);
    if(a==b)
    {
        arr.push(i);
    }
}
console.log("Array : "+arr);