// Solution One


// const h3Elem = document.querySelectorAll(".accordian h3")
// console.log(h3Elem)


// const secondElement = h3Elem[2].nextElementSibling
// secondElement.style.display = "block"

// const thirdElement = h3Elem[3].nextElementSibling
// thirdElement.style.display = "block"

// Solution Two 


const wrapper = document.querySelector(".accordian-wrapper")
const createDiv = document.createElement('div')
createDiv.className = "accordian"

wrapper.append(createDiv)


const accElem = document.querySelectorAll('.accordian')
const acc4thelem = accElem[4]


const createH3TagElem = document.createElement('h3')
createH3TagElem.textContent = "Skills"
acc4thelem.append(createH3TagElem)

const ptagElem = document.createElement('p')
ptagElem.textContent = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GITHUB"
acc4thelem.append(ptagElem)



const h3ElemTag = document.querySelectorAll(".accordian h3")
const fourthElem = h3ElemTag[4].nextElementSibling
fourthElem.style.display = "block"

const geth3Tags = document.querySelectorAll('.accordian h3')
console.log(geth3Tags)

geth3Tags.forEach((h3)=>{
    h3.style.backgroundColor = "#ACCAD2"
})



