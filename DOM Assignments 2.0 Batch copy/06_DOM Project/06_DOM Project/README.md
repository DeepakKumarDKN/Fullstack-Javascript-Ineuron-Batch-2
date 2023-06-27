# Project 6
_Output Image_
![Image](./Output/DOM%20P3%20SS-1.png)

_Changed Logo and Price_
```javascript
const image = document.querySelectorAll('.logo')

image.forEach((imgElem)=>{
    imgElem.src = `/assets/ineuron-logo.png`,
    imgElem.width = '400'
})
```
_Output Image_
![Image](./Output/DOM%20P3%20SS-2.png)

```javascript
const hero = document.querySelector('.hero')
hero.firstElementChild.style.fontSize = "50px"


_Changing its Price_

const price = document.querySelector('.app_price')
const get_price = price.querySelector('span')
get_price.textContent = '$10'

const footer_image = document.querySelector('.footer_logo').firstElementChild
footer_image.src = './assets/logo.svg'
footer_image.width = "150"
```