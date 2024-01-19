let arrayOne = [10,20,30,40,50]
let arrayTwo = [60,70,80,90]

let arrayThree = []

// Builtin method using spread operator
// let arrayThree = [...arrayOne, ...arrayTwo]
// console.log(arrayThree)

for(let i=0; i<arrayOne.length; i++){
    arrayThree[i] = arrayOne[i]
    //console.log(arrayThree)
}

for(let i=0; i<arrayTwo.length; i++){
    arrayThree[i+arrayOne.length] = arrayTwo[i]
    //console.log(arrayThree)
}
// console.log(arrayThree)


// Reverse an array using for Loop.
for(let i= arrayOne.length; i>=0; i--){
    //console.log(arrayOne[i])
}

// builtin-method to reverse an array
// console.log(arrayOne.reverse())