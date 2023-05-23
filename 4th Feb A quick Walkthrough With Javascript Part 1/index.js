"use strict"

let username = "deepak"
const surname = 'nayak'
var address = "Kolkotta"

// use strict

/* 
    "use strict" was introduced in ECMASCRIPT 5 which helps in error handling
    during runtime use strict help us in avoiding mistake, its a d way of writting code. 
    its help us you writting the cleaner code that might go unnoticed

    two way of using strict mode 
    1. Globally 
    2. Locally

    1. Globally
    -----------
    By adding "use strict" in the 1st line we can enable strict mode. 
    
    2. Locally
    ----------
    Locally also we can enable strict mode by just writting "strict mode" indise the function.

    a = 10 
    console.log(a) // this will not give us error becaue we havn't used "use strict" but if i will 
    enable strict mode by writting "use strict" on top of the sentence then we will get an error as 
    
    Reference Error.


     
*/

a = 10
console.log(a)