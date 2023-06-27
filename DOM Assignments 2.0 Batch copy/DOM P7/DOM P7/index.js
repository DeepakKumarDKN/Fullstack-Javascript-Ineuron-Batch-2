const removeElements = document.querySelector('.main__languages')
const get_atag = removeElements.getElementsByTagName('a')
const getAllElements = Array.from(get_atag)

for(let i of getAllElements){
    if(i.textContent.includes(2.0)){
        i.remove()
    }
}


const getForm = document.querySelector('form input')
getForm.placeholder = "Ineuron"
const button = document.querySelector('.main__form-btn').disabled = false
