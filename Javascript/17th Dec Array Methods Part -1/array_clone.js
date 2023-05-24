// 1st way to clone an array

let arrayOne = [10,20,30,40]
let arrayTwo = [10,20,30,40]

arrayTwo.push(50,60)
console.log(arrayTwo)
console.log(arrayOne)

// another way to clone using concat
let array1 = [10,20,30,40,100,180]
let array2 = [].concat(array1)

let array5 = array1.concat(array2)
console.log(array5)
console.log(array2)
console.log(array1)

// another way to clone using spread
let array3 = [10,20,30,40]
let array4 = [...array3]
console.log(array4)