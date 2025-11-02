const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;
var accountPassword = 1234;
/*
prefer not to uae var
because of issue in block scope and functional scope
*/

//accountId = 2 ; //not allowed
accountEmail = "hc@hc.com";
accountPassword = "123";
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
