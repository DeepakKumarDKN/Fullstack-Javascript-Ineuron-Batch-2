function LoginuserMessage(username){
    if (!username){
        return 'Please Enter the username'
    }
    return `username is ${username}`
}

const a = LoginuserMessage()
console.log(a)

// using function with objects

const user = {
    name : 'deepak',
    id : '1234@deepak'
}

const handleObject = (anyObject) =>{
    return `name is: ${anyObject.name}`
}

console.log(handleObject(user))

