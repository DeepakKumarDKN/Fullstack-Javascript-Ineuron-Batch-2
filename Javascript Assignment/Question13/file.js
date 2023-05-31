const current_age = prompt('Enter the age:')
let age = 18
if(current_age>=age){
    alert('You are old enough to drive')
}else{
    let wait = age-current_age
    alert(`You have to wait ${wait} more year to drive`)
}