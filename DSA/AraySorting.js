let numbers = [20,10,4,78,90,100,67]

for(let i=0; i<numbers.length; i++){
    for(j=0; j<numbers.length; j++){
        if(numbers[j]>numbers[j+1]){
            let temp = numbers[j]
            numbers[j] = numbers[j+1]
            numbers[j+1] = temp
        }
    }
}
console.log(numbers)