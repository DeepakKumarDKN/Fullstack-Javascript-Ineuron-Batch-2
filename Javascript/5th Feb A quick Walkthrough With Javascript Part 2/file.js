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


let userName = "deepak"

function displayData(){
    let gmail = "deepak@gmail.com";
    let courseTaken = 1;
    function courseName(){
        let courseName = 'fullstack javascript 2.0'
        function displayCourseName(){
            console.log(`${courseName} ${userName}`)
        }
        displayCourseName()
    }
    courseName()
}
displayData()