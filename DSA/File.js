let numbers = [0,1,2,3]
function MaximumNumber(){
    let MaximumNumber = numbers[0]
    for(let i=0; i<numbers.length; i++){
        if (numbers[i] > MaximumNumber){
            MaximumNumber = numbers[i]
        }
        else {
            continue
        }
    }
    return MaximumNumber
}

console.log(MaximumNumber())