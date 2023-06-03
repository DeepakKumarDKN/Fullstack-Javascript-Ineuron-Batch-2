// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

// solution not including 0
let findPrime = () =>{
    for(let i=2; i<=100; i++){
        let isPrime = true
        for(let j=2; j<i; j++){
            if (i%j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime == true){
            console.log(i)
        }
    }
}

findPrime()

// slution inlcuding 0

let PrimeNumber = () =>{
    for(let i=0; i<=100; i++){
        let isPrime = true
        for(let j=2; j<i; j++){
            if (i%j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime == true){
            console.log(i)
        }
    }
}

findPrime()
PrimeNumber()