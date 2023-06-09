/*
Concatenation
-------------

let arrayOne = [1,2,3,4]
let arrayTwo = [5,6,7]
console.log(arrayOne.concat(arrayTwo))

Output
------
[
    1, 2, 3, 4,
    5, 6, 7    
  ]

*/

/*
adding one more aray
--------------------

let arrayOne = [1,2,3,4]
let arrayTwo = [5,6,7]
let arrayThree = [8,9,10]
console.log(arrayOne.concat(arrayTwo, arrayThree))

Output
------
[
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10 
  ]

*/

/*
fill method in array
--------------------

let arrayFive = [1,2,3,4,5,6,7,8,9,10]
arrayFive.fill('deepak', 6,9)
console.log(arrayFive)
*/


/*

include method in array

Giving us the results in true and false tha whether it is present or not here io am trying to access
whether the value 7 is present or not
let arraySix = [1,2,3,4,5,6,7,8,9,10]
console.log(arraySix.includes(7))

output
-----
true
*/

/*
indexof
if there is a repeatation of value then it will
pick the first index of that particlar value.
let arraySeven = [1,2,3,4,5,6,7,8,9,10]
console.log(arraySeven.indexOf(2))

Output
------
1
*/

/*
lastindexof
------------

let arrayTen = [1,2,3,4,5,6,7,8,9,10,12,11,10,10,34]
console.log(arrayTen.lastIndexOf(10))

Output
------
13
*/

// //isArray()
// let arrayEight = [[1,2,3,4],1,2,3,4,5,6,7,8,9,10]
// console.log(Array.isArray(arrayEight[0]))
// console.log(Array.isArray(arrayEight))

/*
join
let arrayNine = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayNine.join(' | '))

Output
------
1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
*/

// //map
// // map mean whatever i will write inside the map will get applied to each and every elements
// // map will be applied to all the values inside aray
// let maths = [1,4,9,16,25]
// // console.log(maths.map(Math.sqrt))

// originalArray = maths.map(Math.sqrt)
// console.log(originalArray)
// console.log(maths)

// //pop 
// // after poping the element the changes are being made to the original array
// // we will get to know after printing the original array

// let array11 = [1,4,9,16,25]
// console.log(array11.pop())
// console.log(array11)

// // reverse
// let array12 = [1,4,9,16,25]
// console.log(array12.reverse())

/*

shift
it will shift the 1st element and after shifting the 1st element 
the original array will get modified
shift mean here the 1st element is being removed.

let array13 = [1,4,9,16,25]
console.log(array13.shift())
console.log(array13)

*/

// //sort

// let userNames = ['anirudh','abhinash','deepak','rohan','vivek', 'xara', 'bubul']
// console.log(userNames.sort())

/*
unshift
elements to add in the front of the array
10 will be added in the 0th index and 20 will be added in the 1st index
let user = ['anirudh','abhinash','deepak','rohan','vivek', 'xara', 'bubul']
console.log(user.unshift(10,20))
console.log(user)
*/

/*

Split
-----

converting to array
split will return the elements in the form of an array and that too individual elements
where we can find their length as well
let firstname = "deepak"
console.log(firstname.split(""))
console.log(firstname.split("").length)

Output
-----
[ 'd', 'e', 'e', 'p', 'a', 'k' ]
6
*/

