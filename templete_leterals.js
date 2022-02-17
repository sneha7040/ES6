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

