# Project 4 
Output Image
![Image](./Output/DOM%20P1%20SS.png)

_Changing the name The Character to The Archer_
```javascript
const getWrapper = document.querySelectorAll('.wrapper')
const getArcher = getWrapper[1]

const changeText = getArcher.getElementsByTagName('div')
changeText[3].textContent = "The Archer"
```