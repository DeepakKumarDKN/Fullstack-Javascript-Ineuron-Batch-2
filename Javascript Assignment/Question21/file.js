// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.


const countryNames = ['India','Srilanka','Australia','England','SouthAfrica','NewZealand']


if(countryNames.includes('ETHIOPIA')){
    console.log('ETHIOPIA')
}else{
    countryNames.push('ETHIOPIA')
    
}
console.log(countryNames)

