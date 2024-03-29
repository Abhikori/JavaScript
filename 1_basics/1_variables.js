const accountId = 144532
let accountEmail = "abhishek@google.com"
var accountPassword = "12345"
accountCity = "Saharanpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ak@ak.com"
accountPassword = "1346563"
accountCity = "Saharanpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])