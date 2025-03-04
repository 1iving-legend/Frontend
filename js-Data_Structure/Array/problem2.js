function generate()
{
   return  Math.floor(Math.random()*1000+100);
}

let arr= new Array(10);

let a= generate();
let b= generate();
let c= generate();
let d= generate();
let e= generate();
let f= generate();
let g= generate();
let h= generate();
let i= generate();
let j= generate();


arr[0]=a;
arr[1]=b;
arr[2]=c;
arr[3]=d;
arr[4]=e;
arr[5]=f;
arr[6]=g;
arr[7]=h;
arr[8]=i;
arr[9]=j;

arr.sort();
console.log("Array : "+ arr);
console.log("Secound largest : "+arr[8]);
console.log("Secound smallest : "+arr[1]);