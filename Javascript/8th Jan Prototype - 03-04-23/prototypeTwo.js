const UserMethods = {

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