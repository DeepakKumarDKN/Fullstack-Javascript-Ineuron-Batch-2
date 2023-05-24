// const city = ['Mumbai','Delhi','Gurugram','Chennai','Hyderabad']
// city.splice(5,0,'Pune','Nashik','Jaipur')
// console.log(city)

// returning deleted splice value
const Lang = ['Python','Django','RestApi','HTML','CSS']
const newLang = Lang.splice(4, 1,'Javscript','MongoDB')
console.log(Lang)
console.log(newLang)


// Notes :  when i am writtng Lang.splice(4,1)
// that mean it will add element after 4 elements that means after HTML. 
// and 1 mean it will delete the element which is after 4.
// in this example after 4element which is after 'HTML' 1 element will be deleted which is css