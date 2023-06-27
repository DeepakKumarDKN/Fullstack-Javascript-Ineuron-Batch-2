# Project 9
**Output Image**
![Images](./ass9.1-after.png)


_Change the h1 Text Color to red_
```javascript
const getdiv = document.querySelectorAll('div')
const getText = getdiv[3]
const getTitle = getText.querySelector('.title')
getTitle.style.color = "red"
 
```
**Output Image**
![Images](./ass9.2-after.png)
_Change the color of the button on hover:_
```javascript
const getButton = document.querySelector('button')
getButton.addEventListener('mouseover', ()=>{
    document.querySelector('button').style.backgroundColor = "red"
})
```