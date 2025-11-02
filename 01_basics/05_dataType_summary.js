//primitive
//7 --> string, Number, Boolean, null, undefined, Bigint, Symbol

const score = 100;
const scoreValue = 100.3;  //number

const isLoggedIn = false;
const outsideTemp = null;  //"object"
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNum = 13325487695524437n;
console.log(typeof(bigNum));

//non-primitive
//reference type
//Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
let profile = {
    name : "priya",
    age : 22,
};

const myFunc = function(){
    console.log("hello world");
}