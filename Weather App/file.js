const date = new Date()


const date_am_pm = date.toLocaleString('en-US', {
    hour : "numeric",
    minute : "numeric",
    hour12 : true
})

