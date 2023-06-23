# Second Assignment :- Task One
Output Image
![Image](./task1Output.png)

Solution 
```

const h3Elem = document.querySelectorAll(".accordian h3")
console.log(h3Elem)


const secondElement = h3Elem[2].nextElementSibling
secondElement.style.display = "block"

const thirdElement = h3Elem[3].nextElementSibling
thirdElement.style.display = "block"
```