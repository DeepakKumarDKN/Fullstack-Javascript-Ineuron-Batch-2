

**Assignment - 1: Remove the languages that have 2.0 in their name(Every alternative language)**

```javascript
const removeElements = document.querySelector('.main__languages')
const get_atag = removeElements.getElementsByTagName('a')
const getAllElements = Array.from(get_atag)

for(let i of getAllElements){
    if(i.textContent.includes(2.0)){
        i.remove()
    }
}
```

**Assignment - 2: Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.**

```javascript
const getForm = document.querySelector('form input')
getForm.placeholder = "Ineuron"
const button = document.querySelector('.main__form-btn').disabled = false
```