const getWrapper = document.querySelectorAll('.wrapper')
const getArcher = getWrapper[1]

const changeText = getArcher.getElementsByTagName('div')
changeText[3].textContent = "The Archer"

const getGoblin = getWrapper[3]
const changeGlobinName = getGoblin.getElementsByTagName('div')
changeGlobinName[3].textContent = "The Goblin"

const getBarbianSection = getWrapper[0]
const ChangeColor = getBarbianSection.querySelector('.clash-card__unit-stats')
ChangeColor.style.backgroundColor = "#F49A07"

const changeFontColor = getBarbianSection.querySelectorAll('.one-third')
changeFontColor.forEach((font)=>{
    font.style.color = "white"
})


const getArcherSection = getWrapper[1]
const changeBgColor = getArcherSection.querySelector('.clash-card__unit-stats')
changeBgColor.style.backgroundColor = "#F313AF"


const changeFtColor = getArcherSection.querySelectorAll('.one-third')
changeFtColor.forEach((font)=>{
    font.style.color = "white"
})

const getGiantSection = getWrapper[2]
const changeGiantBgColor = getGiantSection.querySelector('.clash-card__unit-stats')
changeGiantBgColor.style.backgroundColor = "#FC9E05"


const changeGiantFtColor = getGiantSection.querySelectorAll('.one-third')
changeGiantFtColor.forEach((font)=>{
    font.style.color = "white"
})

const getGoblinSection = getWrapper[3]
const changeGoblinBgColor = getGoblinSection.querySelector('.clash-card__unit-stats')
changeGoblinBgColor.style.backgroundColor = "#4CDB0A"


const changeGoblinFtColor = getGoblinSection.querySelectorAll('.one-third')
changeGoblinFtColor.forEach((font)=>{
    font.style.color = "white"
})


const getWizardSection = getWrapper[4]
const changeWizardBgColor = getWizardSection.querySelector('.clash-card__unit-stats')
changeWizardBgColor.style.backgroundColor = "#07BFD5"


const changeWizardFtColor = getWizardSection.querySelectorAll('.one-third')
changeWizardFtColor.forEach((font)=>{
    font.style.color = "white"
})

