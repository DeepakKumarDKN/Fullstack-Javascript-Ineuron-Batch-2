# Task One 
## Before
![Image](./Images/Project%20One%20Before%20Image.png)

**Changes Made :**
* Changed The 3rd element from Contact To Project
```javascript
const nav = document.querySelectorAll('nav ul li')
nav[2].textContent = "Projects"
```
* Added One More Element Hire Me

```javascript
const ul = document.querySelector("nav ul")
const createElem = document.createElement('li')
createElem.innerHTML = '<a href="https://www.linkedin.c/in/deepak-kumar-nayak-555188261/">Hire Me</a>'
ul.append(createElem)
```
* Removed Footer Right Side Section (Social Media Icons)
```javascript
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
```javascript
const search = document.querySelector('.search-field')
const firstChild = search.firstElementChild
firstChild.placeholder = "Search My Projects"
```

**After**
![image](./task2Output.png)

# Task Three
![Output Image](./task3Output.png)

Changes Made:

```javascript
const nav = document.querySelectorAll('nav ul li')
nav[2].textContent = "Projects"
```

```javascript
const empadd = document.querySelectorAll('.hero-left-section span')
empadd[2].textContent = "an Employee"
empadd[3].textContent = "iNeuron Intelligence Pvt Ltd"

```
# Task Four
Output Image
-
![Image](./task4Output.png)
Changes Made for Image section

* Added Hitesh Sir Image

```javascript
const imageChange = document.querySelector('.hero-right-section img')
imageChange.src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
```

# Task 5
Output Image
-
![Image](./task5Output.png)

* Created A button Support Me

```javascript
const btn = document.querySelector('.hero-right-section-btns')
const createBtn = document.createElement('button')
btn.append(createBtn)

createBtn.textContent = "Support Me"
```