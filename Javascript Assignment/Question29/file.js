// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const prompt = require('prompt-sync')();
let filename = prompt('Input the filename:')
console.log(filename.split('.')[1])
console.log(filename.split('.').pop())

