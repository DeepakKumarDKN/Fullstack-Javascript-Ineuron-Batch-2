// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = 70
if(score <=49){
    console.log('Your are Fail')
}else if(score >= 50 && score <=59){
    console.log('Grade D')
}else if(score >=60 && score<=69){
    console.log('Grade C')
}else if(score >=70 && score <= 89){
    console.log('Grade B')
}else{
    console.log('Grade A')
}