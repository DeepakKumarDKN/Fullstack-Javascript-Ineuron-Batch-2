
//pattern One

// *
// * *
// * * *
// * * * * 
// * * * * * 


let patternOne = () =>{
    for (let i=1; i<=5; i++){
        let star = "";
        for(let j=1; j<=i; j++){
            star += "* ";
        }
        console.log(star)
    }
}
patternOne()


//pattern Two

// * * * * *
// * * * *
// * * *
// * *
// *

let patternTwo = () =>{
    for(let i=1; i<=5; i++){
        let star = ""
        for(let j=1; j<=(5+1-i); j++){
            star += "* "
        }
        console.log(star)
    }
}

patternTwo()

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 6

let patternThree = () =>{
    for(let i=1; i<=5; i++){
        let number = ""
        for(let j=1; j<=i; j++){
            number += `${j} `
        }
        console.log(number)
    }
}
patternThree()

// 1 
// 2 2       
// 3 3 3     
// 4 4 4 4   
// 5 5 5 5 5

let patternFour = () =>{
    for(let i=1; i<=5; i++){
        let number = ""
        for(let j=1; j<=i; j++){
            number += `${i} `
        }
        console.log(number)
    }
}
patternFour()


// patternFive

// *
// * *
// * * *
// * * * * 
// * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *


let patternFive = () =>{
    for(let i=1; i<=5; i++){
        let star = "";
        for(let j=1; j<=i; j++){
            star += "* "
        }
        console.log(star)
    }
    for(let i=1; i<=5; i++){
        let star = "";
        for(let j=1; j<(5+1-i); j++){
            star += "* "
        }
        console.log(star)
    }
}
patternFive()