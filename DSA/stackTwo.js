let data = []
let currentsize = data.length
let max=2


function push(){
    let newValue = document.getElementById('newElement').value
    if(currentsize>=max){
        console.warn('More Elements cannot be added')
        
    }else{
        data[currentsize] = newValue;
        currentsize = currentsize+1
    }

}

function pop(){
    if(currentsize>0){
        currentsize = currentsize-1
        data.length = currentsize
    }
}

function display(){
    for(let i=0; i<data.length; i++){
        console.warn(data[i])
    }
}