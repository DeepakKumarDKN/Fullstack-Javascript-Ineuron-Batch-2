// 12. Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
let dt = new Date()
console.log(`${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}`)

// DD-MM-YYYY HH:mm
let date = new Date()
console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)

// DD/MM/YYYY HH:mm
let d = new Date()
console.log(d.toLocaleString())

