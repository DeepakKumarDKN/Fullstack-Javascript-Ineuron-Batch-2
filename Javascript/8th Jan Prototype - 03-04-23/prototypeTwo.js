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
