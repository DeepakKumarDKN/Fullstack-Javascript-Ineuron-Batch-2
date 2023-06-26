const btn = document.querySelectorAll('div')
const addBtn= btn[3]
const create_a_tag = document.createElement('a')
create_a_tag.className = "btn"
create_a_tag.textContent = "Pro Subscription"
addBtn.append(create_a_tag)


const recepiesDiv = btn[7]
const create_recepies_aTag = document.createElement('a')
create_recepies_aTag.href = '#'
create_recepies_aTag.innerHTML = "Chinese(7)"
recepiesDiv.append(create_recepies_aTag)

 

// changing all recipe's color

const getRecepieText = document.querySelectorAll('.recipe-text')
getRecepieText.forEach((name)=>{
    name.style.color = "purple"
})

// Adding a card 

const recipe_gallery = document.querySelector('.recipe-gallery')
const createCard = document.createElement('div')
createCard.className = "card"
recipe_gallery.append(createCard)

const getallCards = recipe_gallery.querySelectorAll('.card')
const get5thcard = getallCards[5]

// created a tag
const create_atag = document.createElement('a')
get5thcard.appendChild(create_atag)
create_atag.href= "#"
create_atag.className = "recipe-text"

// created image tag
const createImageTag = document.createElement('img')
create_atag.append(createImageTag)

createImageTag.className = "recipe-img"
createImageTag.src = "https://www.errenskitchen.com/wp-content/uploads/2013/11/Chinese-Chicken-Broccoli-5.jpg"

// create h5 element

const createH5Element = document.createElement('h5')
create_atag.append(createH5Element)
console.log(get5thcard)

createH5Element.className = "recipe-name"
createH5Element.textContent = "Chicken Broccoli"
createH5Element.style.color = "purple"

// created p tag
const createPtag = document.createElement('p')
create_atag.append(createPtag)
createPtag.className = "recipe-disp"
createPtag.style.color = 'purple'

createPtag.textContent = 'Prep : 15min | Cook : 30min'