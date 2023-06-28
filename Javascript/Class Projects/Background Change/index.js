// const buttonONe = document.getElementById('btn1')
// buttonONe.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "red"
// })

// const buttonTwo = document.getElementById('btn2')
// buttonTwo.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "pink"
// })

// const buttonThree = document.getElementById('btn3')
// buttonThree.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "blue"
// })

// const buttonFour = document.getElementById('btn4')
// buttonFour.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "orange"
// })


const buttons = document.querySelectorAll('.button')

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(e.target.id === 'btn1'){
            document.body.style.backgroundColor = "red"
        }else if(e.target.id === 'btn2'){
            document.body.style.backgroundColor = "pink"
        }else if(e.target.id === 'btn3'){
            document.body.style.backgroundColor = "blue"
        }else if(e.target.id === 'btn4'){
            document.body.style.backgroundColor = "orange"
        }
    })
   
})