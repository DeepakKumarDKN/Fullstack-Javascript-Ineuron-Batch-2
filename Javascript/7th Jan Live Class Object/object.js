const user = {
    firstname:'deepak',
    lastname : 'nayak',
    email: 'deepak@gmail.com',
    age: 9087,
    address: 'India',
    about : function(){
        return `${this.firstname} ${this.lastname}`
    }
}

const details = user.about()
console.log(details)
// above one will not be useful if i create multiple user so lets create 
// a function for that.


