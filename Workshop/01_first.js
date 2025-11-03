// var score = 0;
// if(true){
//     var score = 10;
//     console.log("inside if :", score);
// }
// console.log("outside if :", score);


// let score = 5;
// if(score > 3){
//     let score = 10;
//     console.log("inside if :", score);
// }
// console.log("outside if :", score);

const isOdd = number => (number % 2) === 1;

//1. turn these into arrow function
// function greet(name){
//     return "Hello, "+ name+ "!";
// }
// function add(a, b){
//     return a+b;
// }
// function isEven(num){

// }

//2
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num*num);
// console.log(squares);


// const user = " aman";
// const points = 120;
// const message = `hey ${user}, you have ${points} points!`;
// console.log(message);


// const person = {
//     f_name : "Priya",
//     l_name : "Chauahan",
//     age : 21,
//     introduce : function (){
//         console.log(`Hi my name is ${this.f_name} ${this.l_name} and i am ${age} years old`);
//     },
// }
// const hisage = "age";
// console.log(person.[hisage]);
// console.log(person.f_name);
// console.log(person.l_name);
// person.introduce();


// const person = {
//     firstname : "Priya",
//     lastname : "Chauhan",
//     age : 21,
// };
// person.birthyear = 2025- person.age;
// // const message = `hey my birth year is ${person.birthyear}`;
// // console.log(message);

// person.birth = function(){
//     console.log(`Hey my birthyear is ${this.birthyear}`)
// };
// console.log(person);

// const fruits = ["apple", "banana", "kiwi", "mango"];
// const[firstFruit, , thirdFruit] = fruits;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [10, 11, 12];
const result = [...arr, ...arr2];
console.log(result);

