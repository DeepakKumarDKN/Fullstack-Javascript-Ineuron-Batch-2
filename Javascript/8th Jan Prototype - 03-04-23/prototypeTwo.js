const UserMethods = {
    about : function(){
        return `My Fullname is: ${this.fullname}`
    }
}

function createUser(firstname,fullname,email){
    const user = Object.create(UserMethods)
    user.firstname = firstname;
    user.fullname = fullname;
    user.email = email

    return user
}

const userOne = createUser('Deepak','Deepak Kumar Nayak','deepakflushymax@gmail.com')
console.log(userOne.firstname)
console.log(userOne.fullname)
console.log(userOne.email)
console.log(userOne.about())