// const nav = document.querySelectorAll('nav ul li')
// nav[2].textContent = "Projects"

const footerElem = document.querySelector('footer ul')
const getelem = footerElem.getElementsByTagName('li')
const convertToArray = Array.from(getelem)

for(let i=0; i<convertToArray.length; i++){
    convertToArray[i].remove()
}

// search my projects added 
const search = document.querySelector('.search-field')
const firstChild = search.firstElementChild
firstChild.placeholder = "Search My Projects"


//Task Three Solution

const nav = document.querySelectorAll('nav ul li')
nav[2].textContent = "Projects"

//Task Four Solution
const imageChange = document.querySelector('.hero-right-section img')
imageChange.src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"

//Task Five Solution
const btn = document.querySelector('.hero-right-section-btns')
const createBtn = document.createElement('button')
btn.append(createBtn)

createBtn.textContent = "Support Me"
