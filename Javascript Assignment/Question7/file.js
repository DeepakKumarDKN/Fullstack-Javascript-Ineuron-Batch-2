// 07. Declare an array containing the multiple values and use lastIndexOf 
// to determine the position of the first and last occurrence of a word "pw skills".

//last index always start to search from backward


let arrayOne = ['html','css','pw skills','react','javascript','pw skills']

console.log(`The first Occurence of the word 'pw skills' is ${arrayOne.lastIndexOf("pw skills", 4)}`)
console.log(`The last Occurence of the word 'pw skills' is ${arrayOne.lastIndexOf("pw skills")}`)