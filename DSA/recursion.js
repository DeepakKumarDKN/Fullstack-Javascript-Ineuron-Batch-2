// function apple(data){
//     console.log(data)
//     if(data === 10){
//         return 10;
//     }
//     return apple(data+1)
// }
// let data = 1
// apple(data)

function factorial(n){
    if(n == 1){
        return n
    }
    return n*factorial(n-1)
}

console.log(factorial(5))
