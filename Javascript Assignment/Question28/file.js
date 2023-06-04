// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// *
// **
// ***

// for(let i=1; i<=3; i++){
//     let star = ''
//     for(let j=0; j<i; j++){
//         star += "*"
//     }
//     console.log(star)
// }
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// ***
// ***
// ***


// for(let i=1; i<=3; i++){
//     let star = ''
//     for(let j=1; j<=3; j++){
//         star += "*"
//     }
//     console.log(star)
// }

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//    *
//   ***
//  *****


let string = "";
// External loop
for (let i = 1; i <= 3; i++) {
  // printing spaces
  for (let j = 1; j <= 3 - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);