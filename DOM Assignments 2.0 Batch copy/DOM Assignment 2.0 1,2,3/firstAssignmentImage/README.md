# Task One 
## Before
![Image](./Images/Project%20One%20Before%20Image.png)

**Changes Made :**
* Changed The 3rd element from Contact To Project
```
const nav = document.querySelectorAll('nav ul li')
nav[2].textContent = "Projects"
```
* Added One More Element Hire Me

```
const ul = document.querySelector("nav ul")
const createElem = document.createElement('li')
createElem.innerHTML = '<a href="https://www.linkedin.c/in/deepak-kumar-nayak-555188261/">Hire Me</a>'
ul.append(createElem)
```
* Removed Footer Right Side Section (Social Media Icons)
```
const footerElem = document.querySelector('footer ul')
const getelem = footerElem.getElementsByTagName('li')
const convertToArray = Array.from(getelem)

for(let i=0; i<convertToArray.length; i++){
    convertToArray[i].remove()
```

**After**
![Image](./task1Output.png)


# Task Two !!

**Before**
![Image](./Images/Project%20One%20Before%20Image.png)

**Changes Made**
* Search My Projects Added
```
const search = document.querySelector('.search-field')
const firstChild = search.firstElementChild
firstChild.placeholder = "Search My Projects"
```


