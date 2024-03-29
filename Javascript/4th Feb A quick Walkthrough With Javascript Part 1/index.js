//TODO: Node js

/*
  node js is a runtime which allow us to write our javascript code
  so first of all javascript was intitially made to run in the browser but 
  
  RAYAN DHAL Litreally toook everything from the browser (everything mean everything that was 
    available for javascript) he just took everything and created 
  Nodejs runtime which is an exact environment for javascript)

  TODO: Cretator of nodejs is Rayan Dhal

  so now node.js also can do everything which is being previously done by the browser now all those things
   can be done by nodejs and here we dont need any browser for that because it is being designed in such a 
   way that where browser is not required and still we can perform all operations.
*/

/* 
    Javascript Engine (v8) =>   libuv (c++)

    so Libuv was written with c++ the developer mixed Libuv with Javascript and created the engine called => V8 for chrome
*/

/* 
  TODO: let and const and temporal dead zone

  let and const declaration are hoisted 
  var declarations are also hoisted so all three of them are hoisted
  but the way of hoisting is very diffrent from each other lets get into an example:-
  
  let username = "deepak"
  var surname = "nayak"

  so we can  access var surname even before initialization i mean.. 

  console.log(surname)  => we are accessing it even before initialization and yes we can access 
  it because javascript allows us to do it and the memory is being allocated to it even before single line is executed.

  and we will not get any error infact we will get a special placeholder called undefined.

  but we cannot access username here because it is being declared using 
  let and let doesnot allow us to do it, var allows us but let doesn't allow us.

  in case of let we will get an error as Reference Error Cannot access 'username' 
  before initialization so its pretty clear we can only access 'username' after we have assigned any value to it.

  console.log(surname) 
  let username = "deepak";
  var surname = "nayak"


  accessing it after putting some value into it or initializing any value to it for example =>

  let username = "deepak"
  console.log(username)  => now we can access it ..
  var surname = "nayak"

*/

/* 
  TODO: Image One explanation 

  let username = "deepak"
  console.log(username)
  var address = "Kolkotta"

  just look at image One we can see that both username and address both are hoisted but
   address is attatched into global and username is inside the Script that mean 
   they are stored inside diffrent memory space they are not inside the global 
   now and we cannot access it before putting some value into it/ before initializing some value into it.:

  Script:
    username : undefined
  
  Global:
    address: undefined

  
  Again look at the image when the control will come into line number 3. Inside the Script the username is being assigned with 'deepak' so now we can access it ... because now username is pointing out to 'deeepak' or the value 'deepak is being stored inside username


  so now when the line number 3 will execute we can check on the console that "deepak: is being printed there

  till now address will be undefined but when i will execute the line number 4 at that time address will point out towards "Kolkotta"

  TODO: Temporal Dead Zone

  so the timetaken till the variable was hoisted and till it was i
  nitialized a value into it. that paricular time between un initialization 
  to initialize a value into it is known as Temporal Dead Zone.

  console.log(username)
  let username = "deepak" 

  var surname = "kumar"

  during the temporial Dead Zone Phase we cannot access the value of'
  username we can only access it after the temporial Dead Zone Ends.

*/

/*
    Accessing 
    ---------
    let username = "deepak"
    var address = "kolkotta"

    we can access address using window.address as it is defined in the global scope
*/

/*
    Redeclaration of let and var
    ----------------------------
    let username = "deepak"
    let username = "rahul" => this is not allowed as it results to syntax error
    console.log(username)

    var  username = "deepak"
    var username = "rahul"  => this is allowed
    console.log(username)


    const username = "deepak"
    const username = "deepak"
    console.log(username)

    const is very strict as compared to the let because if we are declaring something with 
     let then we can leave it by not initializing a value.

    let username; => we can write like this let will allow us to do that


    
    but if we are declaring with const then it is mandatory that we have to provide some value to it.

    const username;
    console.log(username)
    SyntaxError: Missing initializer in const declaration

*/




let username = "deepak"
const surname = 'nayak'
var address = "Kolkotta"
const city = "India"


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

    // basics Function Example: 
    ---------------------------

    function myname(){
    "use strict"
    name = "deepak"
    console.log(name)
    }

    myname()

    this is give us an error "name is not defined" as because i hae used "use strict" inside the function 
    but if i will not use "use strict" then i will not get any error.

    ... Note: i am using  "use strict" locally ...


    Duplicate parameter are not allowed
    -----------------------------------

    without using "strict mode"
    ---------------------------
    function displayname(name, name){
    console.log(name)
    console.log(name)
    }
    displayname('deepak','rahul')

    Output
    ------
    rahul
    rahul

    while using "strict mode"
    function displayName(name,name){
    "use strict"
    console.log(name)
    }

    displayName('deepak','rahul')

    Output
    ------
    SyntaxError: Duplicate parameter name not allowed in this context

    Note: 
        1. Strict mode will not allow you to use undeclared variables.
        2. it will not allow you to use duplicate parameters

    // Template Literal or Inter Polation / Template String
    
    console.log(`My name is: ${username}`)

    // Ternary Operator 

    let usernameone = "deepak"

    username == 'deepak' ? console.log(true): console.log('alse')

*/

// Global and Local Scope
// ----------------------

var a = 20
// global scope


// {
//   let a = 30 
//   let b = 40 
//   const c = 50

//   console.log(a) // local scope 
// }

// console.log(a) i will get 10 as it is a local scope

// Scope Examples
function One(){
  const username = "deepak"

  function Two(){
    const website = "Youtube"
    //console.log(username)
  }
  //console.log(website)
}
//two()

/*
In this example i am using prompt this will work in borwser

let userDetails = {
    username : 'deepak',
    lastname : 'nayak',

    courseList : [],
    buyCourse: function(){
        for(let i=1; i<=5; i++){
            let courseName = prompt('Enter the course name:')
            this.courseList.push(courseName)
        }
    }
}
userDetails.buyCourse()
console.log(userDetails.courseList)

*/


/*
Declaring method inside an object

let userDetails = {
    username : 'deepak',
    lastname : 'nayak',

    courseList : [],

    buyCourse: function(coursename){
        this.courseList.push(coursename)
    },

    getCourseName: function(){
        return `${this.username} has enrolled in ${this.courseList}`
    }
}

userDetails.buyCourse('Python')
console.log(userDetails.getCourseName())
*/
// let login = true
// function displayDatas(){
//   if(login === true){
//     const name= "deepak"
//     const fullname = "deepak kumar nayak"
//     console.log(name)
//     console.log(fullname)
//   }
//   console.log(name)
  
// }
// displayDatas()




// Todo: Null 
//--------------

// when i dont want to give any type of value for example 

//let a = null;


// let arrayOne = [10,20,30,40]
// let arrayTwo = arrayOne; 

// arrayOne.push(90)

// console.log(arrayOne)
// console.log(arrayTwo)


let laptop = "Dell" 

switch(laptop){ 
    case "Hp":
    console.log(' i have bought Hp Laptop')
    break 

    case "Dell": 
    //console.log(' i hae brought dell laptop')
    break

    case "Apple": 
    console.log('i have bought apple laptop')
    break

    default: 
    console.log('Laptop is yet to buy')
  
}

var hello = "op0"

//hello == "hey" ? console.log('fsjs2'): console.log('fsjs1')

// example for forof loop (used in array)

// const array = [10,20,30,40,50,60,70]
// for(let i of array){
//   console.log(i)
// }

// example for forin Loop (used in objects)

// const biodata = {
//   username: 'deepak_kumar',
//   fullname: 'deepak kuma nayak',
//   job: function(){
//     console.log('working as a fullstack developer')
//   }
// }

// for(let i in biodata){
//   if (i === 'job'){
//     biodata[i]()
//   }else{
//     console.log(biodata[i])
//   }
// }

function displayName(){
  let name = 'deepak'
  function displaysurName(){
    function fullData(){
      console.log(name)
    }
    fullData()
  }
  displaysurName()
}

displayName()