const accountId = 123456
let accountEmail = "sushant@google.com"
var accountPassword = "1234"
accountCity = "Meerut"
let accountState;

 // accountId = 2 // not allowed

 accountEmail = "sp@sp.com"
 accountPassword = "1212"
 accountCity = "Delhi"

 console.log(accountId);
 console.log(accountEmail);

/*
Prfer not to use var, use let and const instead.
Because var is function scoped and can be re-declared and updated, which can lead to unexpected behavior.Because of the issue in block scope and functoinal scope 
*/
 console.table({accountId, accountEmail, accountPassword, accountCity, accountState });
 