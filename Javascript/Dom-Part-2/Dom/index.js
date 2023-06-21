const day = document.getElementsByClassName('day')
//console.log(day)

const convertintoArray = Array.from(day)
//console.log(convertintoArray)

convertintoArray.forEach((elem)=>{
    elem.style.color = "orange"
    elem.style.fontFamily = "Poppins"
})

const parent = document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0])

//console.log(parent.firstElementChild)
//console.log(parent.lastElementChild)

const dayOne = document.querySelector('.day')
// console.log(dayOne)
// console.log(dayOne.parentElement)

//console.log('Nodes', parent.childNodes)

//createElement

const div = document.createElement('div')
div.className = "main-div"
div.id = "main-head"
div.style.backgroundColor = "green"
div.style.width = "max-content"
div.style.padding = "5px"
div.style.fontFamily = "Poppins"
div.setAttribute('title','generate a title')
//div.innerText = "Aby Teri Toh "
const addText = document.createTextNode('hello')
div.appendChild(addText)
document.body.appendChild(div)
//console.log(div)

// remove the element

const element = document.getElementById('main-head')
//element.remove()

const editText = document.getElementById('main-head')
//editText.innerText = "Hello edit over"


// function addLanguage(langName){
//     const li = document.createElement('li')
//     li.innerHTML = `${langName}`
//     document.body.appendChild(li)

// }
// addLanguage('Python')

