const day = document.getElementsByClassName('day')
console.log(day)

const convertintoArray = Array.from(day)
console.log(convertintoArray)

convertintoArray.forEach((elem)=>{
    elem.style.color = "orange"
    elem.style.fontFamily = "Poppins"
})

const parent = document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0])

console.log(parent.firstElementChild)
console.log(parent.lastElementChild)