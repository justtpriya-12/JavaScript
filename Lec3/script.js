// //sum of n natural number
// let n = 20;
// let sum = 0;
// for(let i = 1; i <= n; i++){
//     sum = sum+i;
// }
// console.log(sum);

// //while
// let i = 1;
// let result = 0;
// while(i <= n){
//     result = result+i;
//     i++;
// }
// console.log(result);

// //do while
// let j = 1;
// let add =0;
// do{
//     add = add+j;
//     j++;
// } while(j <= n);
// console.log(add);

// //for-of loop
// let str = "ApnaCollege";
// for(let i of str){
//     console.log(i);
// }

// let profile = {
//     name : "Priyaa Chauhan",
//     age : 20,
//     cgpa : 9,
//     iaPass : true,
// };
// for(let key in profile){
//     console.log(key , profile[key]);
// }



//practice 2
//create a game where you start with any random game number. ask the user to keep guessing the game number until the user enters correct value
// console.log("Hello");
// let gameNum = 25;
// let userNum = Number(prompt("Guess the game number : "));

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number. Guess again :");
// }
// console.log("congratulation, you entered the right number");


//STRING

let str1 = "ApnaCollege";
let str2 = "Hello";
console.log(str1[0]); 

//template literal
let specialStr = `This is a template literal`;
console.log(typeof specialStr);
//
let obj = {
    item :  "Pen",
    price : 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output); 
console.log("the cost of", obj.item, "is", obj.price, "rupees");