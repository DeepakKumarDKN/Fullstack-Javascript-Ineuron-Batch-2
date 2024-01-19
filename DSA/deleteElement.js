let numbers = [10,20,30,40,50,60]
let position = 3

for(let i = position; i<numbers.length-1;i++){
    numbers[i] = numbers[i+1]
}
numbers.length = numbers.length-1
console.log(numbers)
