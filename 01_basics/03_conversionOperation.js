let score = "33abc";
console.log(typeof(score));
console.log(typeof score);

//conversion
let value = Number(score);
console.log(value);
console.log(typeof(value));

let valid = null;
console.log(typeof(valid));
console.log(typeof valid);

//conversion
let values = Number(valid);
console.log(values);
console.log(typeof(values));

//"33" --> 33
//"33abc" --> NaN
//true --> 1; false --> 0;

// *****************************Operation ***************************
let v = 3;
let negV = -v;
console.log(negV);

let str1 = "hello";
let str2 = "Priya";
let str3 = str1 + str2;
console.log(str3);
console.log("1"+2);
console.log("1"+2+2);
console.log(2+2+"1");

//boolean
console.log(true);
console.log(+true);
//console.log(true+); wrong