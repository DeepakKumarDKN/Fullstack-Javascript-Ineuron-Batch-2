// 30. Create a simple calculator program in JavaScript which can perform 
//the addition, substraction, multiplication and division on given numbers.

const prompt = require('prompt-sync')();

console.log('A simple calculator which can perform addition, substraction multiplication and division:')
let operator = prompt('Enter the operator:')
let firstvalue = parseInt(prompt('Enter the first Value:'))
let secondValue = parseInt(prompt('Enter the second value:'))
if(operator == "+"){
    console.log(firstvalue + secondValue)
}else if(operator == "-"){
    console.log(firstvalue- secondValue)
}else if(operator == "*"){
    console.log(firstvalue * secondValue)
}else{
    console.log(firstvalue / secondValue)
}