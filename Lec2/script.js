//conditional statement

//if-statement
let mode = "Dark";
let color;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);

//if-else statement
let age = 45;

if(age > 18){
    console.log("Adult");
} else {
    console.log("chile");
}

//else-if statement
let signal = "green";

if(signal === "green"){
    console.log("go");
} else if (signal === "yellow"){
    console.log("wait");
} else {
    console.log("stop");
}

//ternary operator
//condition ? true output : false output;
let marks = 19;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
 

//Practice Ques - 1
//get user to input number using prompt("Enter a number :"). Check if the number is a multiple of 5 or not.
let num = prompt("Enter the number :");
if(num % 5 == 0){
    console.log("number is multiple of 5");
} else {
    console.log("number is not multiple of 5");
}

//practice ques 2:
// write a code which can give grades to students according to their scores:
// 90-100 = A
// 70-89 = B
// 60-69 = C
// 50-59 = D
// 1-49 = F

