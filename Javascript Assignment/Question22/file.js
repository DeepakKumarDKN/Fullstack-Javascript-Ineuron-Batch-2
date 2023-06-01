// 22. The following is an array of 10 students ages:
// const ages = [19,22, 19, 24, 20, 25, 26, 24, 25, 24]
// const sortArray = ages.sort()
// console.log(sortArray)



// Sort the array and find the min and max age

const ages = [19,22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortArray = ages.sort()
let minValue = sortArray[0]
let findMinimum = () =>{
    for(let i=0; i<sortArray.length; i++){
        if (sortArray[i]< minValue){
            minValue = ages[i]
        }
    }
    return `the minimum value is: ${minValue}`
}
console.log(findMinimum())


const ages = [19,22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortArray = ages.sort()

let maxValue = sortArray[0]
let findMaximum = () =>{
    for(let i=0; i<sortArray.length; i++){
        if (sortArray[i]> maxValue){
            maxValue = ages[i]
        }
    }
    return `the maximum value is ${maxValue}`
}
console.log(findMaximum())


// Find the median age(one middle item or two middle items divided by two)
// const ages = [19,22, 19, 24, 20, 25, 26, 24, 25, 24]
// const sortages = ages.sort()




// Find the average age(all items divided by number of items)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let findAverage = () =>{
    let sum = 0
    for(let i of ages){
        sum = sum+i
    }
    return sum / ages.length
}
console.log(findAverage())




// Find the range of the ages(max minus min)
const ages = [19,22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortarray = ages.sort()
console.log(sortarray)

let max = sortarray[sortarray.length-1]
console.log(max)

let min = sortarray[0]
console.log(min)

const range = max - min
console.log(range)


// Compare the value of (min - average) and (max - average), use abs() method

let sumAverage = ages.reduce((acc,curr)=>{
    return acc + curr
})

console.log(sumAverage)

let average = Math.floor(sumAverage / ages.length)
console.log(average)

let minAverage = min - average
let maxAverage = max- average

console.log(minAverage)