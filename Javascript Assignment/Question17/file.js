// 17. Write a program which tells the number of days in a month.

function getDays(year,month){
    return new Date(year, month,0).getDate()
}
console.log(getDays(2023,2))