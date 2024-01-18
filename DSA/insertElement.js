let data = [10,20,30,50,60]
let newelement = 40

let position = 3;

for(let i = data.length-1; i>=0; i--){
    if(i>=position){
        data[i+1] = data[i]
        if(i === position){
            data[i] = newelement
        }
    }
}
console.log(data)

// using splice 
let items = [90,100,102,103,104]
items.splice(3, 0, 10)
console.log(items)