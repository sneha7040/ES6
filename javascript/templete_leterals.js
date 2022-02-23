//es5
console.log("My Name is Sneha.  My age is 22.");
//es6
console.log(`My Name is Sneha. My age is 22.`);

//  es5
let firstName = "Sneha";
let lastName = "Mondal";
console.log("my name is " + firstName + " " + lastName);

// es6
console.log(`my name is :${firstName} ${lastName}`);

let a = 20;
let b = 30;
let c = a + b;
console.log(a + b + " and\n not " + (2 * a + b));

console.log(
  `${a + b} and
not ${2 * a + b}`
);

// es6 strings.method
const fullName = `${firstName} ${lastName} `;
console.log(`${firstName}`.startsWith("S"));
console.log(`${firstName}`.endsWith("y"));
console.log(`${firstName}`.includes("eh"));

console.log(fullName.repeat(10));

// array destructuring

const arr = ["js", "php", "c", "python", "java"];
//es5
// var top1 = arr[0];
// var top2 = arr[1];
// var top3 = arr[2];

// console.log("my favourite programming language is "+top1);

//es6

////let[top1, top2, top3, top4, top5] = arr;
//console.log("my favourite programming language is "+top1);
// console.log(arr.length);

// let[top1,,,,toplast]=arr;
// console.log(`my favourite programming language is ${top1} my least favourite language is ${toplast}`);

let top1, top2;
[top1, top2] = arr;
console.log(
  `my favourite programming language is ${top1} and my | least favourite language is ${top2}`
);

// swap two number without using third variable
// let x1 = 20;
// let y1 = 10;
// // 10+20;
// // a=30;
// // b=30-20;

// x1 = x1+y1;
// y1 = x1-y1;
// x1 = x1-y1;
// console.log(x1);
// console.log(y1);

const bioData = {
  name: "Sneha",
  age: 22,
  deg: "B.Tech",
  hobb: {
    first: "playing",
    sec: "games",
  },
};

let { name: myname, age: ages, deg, hobb } = bioData;
console.log(
  `My name is ${myname}. My age is ${ages} and My highest qualificaton is ${deg}. I love making ${hobb.first} and palying ${hobb.sec}.`
);

// fat arrow function
//es5
// var sum = function(){
//   var a =5;
//   var b=10;
//   return (a+b);
// }
// console.log(sum());

// es6
// const sum = () => {
//   let d = 5;
//   let t = 10;
//   return d + t;
// };
// console.log(sum());

// let e = 30;
// let f = 10;
// const add = (f,e) =>  e + f;
  
// console.log(add(10,40));


// default parameter

//es5
// function mult (a,b){
//   b=(typeof b !== 'undefined')?b:2
//   console.log(a*b);

// }
// mult(4);

// //es6
// function mult (a,b=1){
//   // b=(typeof b !== 'undefined')?b:2
//   console.log(a*b);

// }
// mult(4);


// const mul = (a=2,b=4,c=5)=>{
//  console.log(`the mult of two number is :${a*b*c}`);
// }
// mul(5);


// rest parameter
//es5
// function sum (a,b,c,d,e,f){
//   console.log(a+b+c+d+e+f);

// }
// sum(1,2,3,4,5,6);

//es6

// function sum (...inputs){
  
//   console.log(...inputs);
//   let total =0;
//   for(let i of inputs){
//     total = total+i;
//   }
//   console.log(total);

// }
// sum(1,2,3,4,5,6);

// //rest with function and other arguments

// function fun(a,b,...c){
//   console.log(`${a} ${b}`);
//   console.log(c);//rest value in array
//   console.log(c[0]);//1st index value of array
//   console.log(c.length);//array length
//   console.log(c.indexOf('Eden'));
// }

// fun('Ronaldo','Messi','Pele','maradona','Neymar','Eden');

// spread operator
//es5
// function sum(a,b,c){
// console.log(a+b+c);
// }
// // sum(4,2,5);
// var arrVal =[4,2,5];
// sum.apply(null,arrVal);

//es6

function sum(a,b,c){
  console.log(...arrVal);

  }
  // sum(4,2,5);
  var arrVal =[4,2,5];
  sum(...arrVal);
  // sum.apply(null,arrVal);
//replace concat method
  let arr1=[1,2,3];
  let arr2 =[4,5,6];
  let arr3 =[7,8,9];
  // arr1=arr1.concat(arr2);
  arr1=[...arr1,...arr2,...arr3];
  console.log(arr1);
 

// replace copy 
let arrc1=[1,2,3];
let arrc3 =[6,7,8];
// let arrc2 =[arrc1];
// arrc2.push(4,5);
let arrc2 = [...arrc1,4,5,...arrc3,9];
console.log(arrc2);
