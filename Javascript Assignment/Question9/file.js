// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

// tuthy vaues:

// Example One
let courseTaken =1
if (courseTaken){
    console.log(`Total numbet of course taken: ${courseTaken}`)
}else{
    console.log('This block will only execute if there is any falsy value')
}


// Example Two
let username = "deepak"
if (username){
    console.log('username is: ' + username)
}else{
    console.log('This block will only execute if there is any falsy value')
}

//Example Three
console.log(1 == '1')



// falsy values: 0 null undefined " "

//Example One
let courseTaken = 0
if (courseTaken){
    console.log(`Total numbet of course taken: ${courseTaken}`)
}else{
    console.log('example for falsy value')
}


//Example Two
let username = ""
if (username){
    console.log('username is: ' + username)
}else{
    console.log('example for falsy value')
}


//Example Three
let value = null
if(value){
    console.log('value is:'+ value)
}else{
    console.log('Example for falsy value')
}

console.log(1 === '1')