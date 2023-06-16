const UserMethods = {
    about : function(){
        return `My Fullname is: ${this.fullname}`
    },
    profession : function(){
        return `${this.job}`
    }
}

function createUser(firstname,fullname,email,job){
    const user = Object.create(UserMethods)
    user.firstname = firstname;
    user.fullname = fullname;
    user.email = email
    user.job= job

    return user
}

const userOne = createUser('Deepak','Deepak Kumar Nayak','deepakflushymax@gmail.com', 'Fullstack Developer')
console.log(userOne.firstname)
console.log(userOne.fullname)
console.log(userOne.email)
console.log(userOne.about()) // getting these methods due to Object.create(UseMethods)
console.log(userOne.profession()) // getting these methods due to Object.create(UseMethods)


// creating a pototype function will go with the same example

function CreateUser(firstname,fullname,email,job){
    const user = Object.create(CreateUser.prototype)
    user.firstname = firstname;
    user.fullname = fullname;
    user.email = email
    user.job= job

    return user
}

CreateUser.prototype.bio = function(){
    return `Hello I am ${this.fullname} and i am a professional ${this.job}`
}

const userTwo = CreateUser('rahul','rahul krishna vaidya','rahul@gmail.com', 'Singer')
console.log(userTwo.bio())



//New Keyword
// what new keyword is doing behing the scenes

// creating an empty object it will be done automatically with the help of new keyword we dont have to do it by yourself.
// this is referring to the empty object.
// return this 


function Data(firstname,lastname,age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age 
}
Data.prototype.is18 = function(){
    if(`${this.age}` > 18){
        return `he is an adult`
    }else{
        return `he should be above 18`
    }
}


const data = new Data('Srikant','Dubey',18)
console.log(data.firstname)

console.log(data.is18())


// Prototype Defination
// so whenever you create an object the javascript engine without even letting you know attaches your object to diffrent methods

// when we will write array.
// we will get some other functions like concat , fill, filter, map, findIndex etc etc all these things we get because of prototype.
// remember i hant defined it inside the object but still i got access to it

let user = {
    name:'deepak',
    fullname:'deepak kumar nayak',
    course: 'Javascript Ineuron 2.0'
}

// i can normally access name by writting 
console.log(user.course)
// i can also get some other properties/methods like 
// hasOwnProperty()
// isPrototypeOf()
// propertyIsEnumerable()
// toLocaleString()
// toString()
// valueOf()
// __defineGetter__()
// __defineSetter__()
// __lookupGetter__()
// __lookupSetter__()

// all of these we get because of prototype function

// let learn some more with the help of an array:

let arrayOne = [1,2,3,4,5,6,7,8,9,10]

// so while working wih an array the methods like push pop 
// splice slice all these methods we get because of prototype.

// all these methods were being added automatically suppose 
// lets say we have defined a variable usename and inside that 
// we have stored some value inside it 

// now what we cab do we can check its length
// username.length all these functions or methods were being added
// thats where the prototype comes into action.

// protoptype can be used in function, string, array
// prototype is a mechanism by which javascript Objects inherit features from one another.


// let get_batch_name = {
//     batchName : 'Fullstack Javascript 2.0',
//     getbatchName : function(){
//         return `${this.batchName}`
//     }
// }

// let student = {
//     name : 'deepak',
//     lastname : 'nayak',
//     getFullname: function(){
//         return `${this.name} ${this.lastname}`
//     }
// }

// let teacher = {
//     name : 'Anurag Sir',
    
// }

// teacher.__proto__ = get_batch_name
// student.__proto__ = get_batch_name

// teacher.getbatchName()





let studentOne = {
    name : 'Deepak Kumar',
    city: 'Kolkotta',
    gmail : "deepak@gmail.com"
}

let studentTwo = {
    name : 'rahul krishna vaidya',
    city : 'Mumbai',
    gmail: 'rahul@gmail.com'
}

Object.prototype.batchName = 'Fullstack Javascript 2.0'
Object.prototype.Mentorname = "Hitesh Sir and Anurag Sir"

let stu = studentTwo
console.log(stu.batchName)

let stu_ = studentOne
console.log(stu_.Mentorname)