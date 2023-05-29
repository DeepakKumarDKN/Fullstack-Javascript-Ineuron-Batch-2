// 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

let username = '        deepak'
console.log(username.trim())
// automatically removing the blank spaces from left side

let usernameTwo  = "deepak    "
console.log(username.trim())
// removing spaces from right side

let useraNameThree = "      deepak      "
console.log(useraNameThree.trim())
// removing spaces from both the sides.