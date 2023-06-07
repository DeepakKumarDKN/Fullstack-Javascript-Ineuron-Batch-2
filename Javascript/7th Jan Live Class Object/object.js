// const user = {
//     firstname:'deepak',
//     lastname : 'nayak',
//     email: 'deepak@gmail.com',
//     age: 9087,
//     address: 'India',
//     about : function(){
//         return `${this.firstname} ${this.lastname}`
//     }
// }

// const details = user.about()
// console.log(details)
// above one will not be useful if i create multiple user so lets create 
// a function for that.


// Function to create an object.
// function createUser(firstname, lastname, email,age,address){
//     const user = {};
//     user.firstname = firstname,
//     user.lastname = lastname,
//     user.email = email,
//     user.age = age,
//     user.address= address,
//     user.about = function(){
//         return `${this.firstname} is from ${this.address}`
//     }
//     return user
// }

// const userOne = createUser('deepak','nayak','deepak@gmail.com',3456,'India')
// console.log(userOne.firstname)
// const about = userOne.about()
// console.log(about)

// const userTwo = createUser('Rahul','Krishna','rahul@gmail.com',4567,'Mumbai')
// const aboutuserTwo =userTwo.about()
// console.log(aboutuserTwo)

// creating different object for method[about]
const isAbout = {
    isabout:function(){
       return `${this.name} leaves in ${this.location}` 
    }
}
 
function createuser(name,age,location){
    const user ={}
    user.name = name,
    user.age = age,
    user.location = location,
    user.about = isAbout.isabout
    
    return user;
}


const data = createuser('Deepak',908,'India')
console.log(data.about())


// creating object using object.create
// Example: 


function profile(name,lastname,age,profession,rating){
    const profileData = Object.create(profileabout)
    profileData.name = name,
    profileData.lastname = lastname,
    profileData.age = age,
    profileData.profession = profession
    profileData.rating = rating

    return profileData

}

const profileabout = {
    is_about: function(){
        return `${this.name} and he works as a ${this.profession}`
    },
    feedBack: function(){
        if(this.rating > 7){
            console.log('He is a GoodDeveloper')
        }
    }


}


const profileOne = profile('Deepak Kumar','Nayak',2345,'Mern Stack Developer',8)
console.log(profileOne.is_about())
profileOne.feedBack()

// though i am using here Object.create function just look at the code 
// i havn't used profession inside the profileData function 
// but still i am using Object.create() i can able to access it.  



console.log(profileOne.__proto__)
