// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// *
// **
// ***
const prompt = require('prompt-sync')();
let value = "";

let trianglePattern = () =>{
    n = prompt('Enter the value of n:')
    for(i=1; i<=n; i++){
        for(j=1; j<=i; j++){
            value+="* "
        }
        value += "\n"
    }
    console.log(value)
}
trianglePattern()


	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// ***
// ***
// ***

let squarePattern = () =>{
    let star = "";
    for(let i=1; i<=3; i++){
        for(let j=1; j<=3; j++){
            star+="*"
        }
        star+= "\n"
    }
    console.log(star)
}

squarePattern()


// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//    *
//   ***
//  *****

let pyramidPattern = () => {
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
}

pyramidPattern()