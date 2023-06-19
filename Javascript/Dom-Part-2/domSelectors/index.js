const titlename = document.getElementById('title')
console.log(titlename)

const nameofTitle = document.getElementById('title').id
console.log(nameofTitle)

const nameofclass = document.getElementById('title').className
console.log(nameofclass)

const getidattribute = document.getElementById('title').getAttribute('id')
console.log(getidattribute)

// how to set attribute

const setAttribute = document.getElementById('title').setAttribute('class', 'test')
// now go and check on console ypu will find test is being over rided
// always remember one thing this will override

// final Output will be 
//<h1 id="title" class="test">Basics of Dom</h1>

// i can also more then one class name i mean two class name like 
// <h1 class='test heading'>Hello</h1>


const setattribute = document.getElementById('title').setAttribute('class', 'test heading')
//<h1 id="title" class="test heading">Basics of Dom</h1>
// see we have two class name one is test and the other one is heading

// adding some styles to it

const titleaddStyle = document.getElementById('title')
console.log(titleaddStyle)

titleaddStyle.style.color = "grey";
titleaddStyle.style.fontFamily = "Poppins"


// adding border-radius and background color

title.style.backgroundColor = "yellow"
title.style.paddingLeft = "10px"
title.style.width = "max-content"
title.style.paddingRight="10px"
titleaddStyle.style.borderRadius = "10px"

// adding some text.

const viewText = titleaddStyle.innerText 
console.log(viewText)

// iam just accessing here 
// result = Basics of Dom

const addText = titleaddStyle.innerText = "Dom Basics Part One By Hitesh"
console.log('text added: ',addText)

// if there is some hidden text then for that i can use textContent
// if i want to work only with those text we are seeing in the Browser then for that i can go for innerText

// using textContent in this Example 
// so what we will get to know from this example is though the text is hidden 
// i mean i have used style proprty displsy none so obviously we will not get the full sentence
// but still though i am using textContent we can get to see the full sentence. 

const getText = document.getElementById('headingTwo').textContent
console.log(getText)

//Output
//Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Adipisci ex beatae, inventore eius voluptatibus omnis!