let numbers = [10,20,30,40,50]
let searchElement = 30

// for(let i=0; i<=numbers.length-1; i++){
//     if(numbers[i] === searchElement){
//        console.log(`${searchElement}, ${i}`)
//     }
// }

// bydefault function 
// indexOf to find the index of the element

// we can also use bydefault function for deleting element that is splice 
numbers.splice(2,1)
// 2 for index number 
// 1 for items we want to delete
console.log(numbers)