// function Outer(){
//     let name = "deepak"
//     function Inner(){
//         let surname = "nayak"
//         function deep(){
//             console.log(name)
//             console.log(surname)
//         }
//         deep()
//     }
//     Inner()

// }
// Outer()

// function profile() {
//     const fullName = "Tobi Sho";
//     function sayName() {
//       const fullName = "Oluwa Sofe";
//       function writeName() {
//         return fullName;
//       }
//       return writeName();
//     }
//     return sayName();
//   }
// console.log(profile())


// let userName = "deepak"

// function displayData(){
//     let gmail = "deepak@gmail.com";
//     let courseTaken = 1;
//     function courseName(){
//         let courseName = 'fullstack javascript 2.0'
//         function displayCourseName(){
//             console.log(`${courseName} ${userName}`)
//         }
//         displayCourseName()
//     }
//     courseName()
// }
// displayData()

// Closure Example;

/*
function outer(){
    let username = 'deepak';
    function inner(){
        console.log(username)
    }
    return inner
}
var z = outer()
z()

*/

// Closure Example 2:

/*
function outerFunction(){
    function innerFunction(){
        console.log('This is inner function')
    }
    return innerFunction
}

let result = outerFunction()
result()
*/

// Closure Example Three

// function FullName(firstname,lastname){
//     function printFullName(){
//         console.log(`${firstname} ${lastname}`)
//     }
//     return printFullName
// }

// let result = FullName('Deepak Kumar','Nayak')
// result()

function greeting(message) {
    return function(name){
         console.log(message,name)
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');

 sayHi('John')
 sayHello('Deepak')

function counter(){
    let count = 0;

    function calculate(){
        console.log(count+1)
    }
    return calculate
}

result = counter()
result()