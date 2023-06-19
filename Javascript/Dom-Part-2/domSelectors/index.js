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
