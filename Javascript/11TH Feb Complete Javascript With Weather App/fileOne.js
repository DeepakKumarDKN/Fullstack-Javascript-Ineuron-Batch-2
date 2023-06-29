// Map Filter Reduce
// Promises and Fetch Api 
// Weather App

// map => Iterate over array and perform a action on all the elements

// filter => Iterate over Array and filter out the elements. This will give us an new array
// filter only filter out the things and we have to apply some condition here 

// reduce => do some sort of operations and bring single value as an output.
// redunce have three things 
// 1. accumulator 2. current 3. initial Value


const numbers = [10,20,30,40,50,60,70,80,90,100,33,66,99]
const nums = numbers.map((val)=>{
    return val+2
})

//console.log(nums)

const Nums = numbers.filter((num)=>{
    return num % 3 ==0
})

//console.log(Nums)

const numsReduce = numbers.reduce((num, num1)=>{
    return num +num1
},0)

//console.log(numsReduce)

// promise 

const bucket = ['coffee','chips','vegetables','rice']

const Grocery = new Promise((resolve,reject)=>{
    if(bucket.includes('Chicken')){
        resolve('Grocery Shopping Over')
    }else{
        reject('We Forgot To Bring The Respected Item')
    }
})

Grocery.then((grocery)=>{
    //console.log(grocery)
},
(error)=>{
    //console.log(error)
})

// Another Promise Example: 

const makePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const arayOne = [1,2,3,4,5,6,7,8,9]
        if (arayOne.length>10){
            resolve('Completed')
        }else{
            reject('In Completed')
        }
    },2000)
});


makePromise.then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(result)
})

// Fetch Api 

const url = 'https://restcountries.com/v3.1/all'
fetch(url)
.then((response)=>{return response.json()})
.then((data)=>{return console.log(data)})
.catch((error)=>{return console.log(error)})