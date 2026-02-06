// const start = document.getElementById('start')
// const stop = document.getElementById('stop')

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}



// const changeColor = function(){
//     start.addEventListener('click',function(e){
//         let randomColor = parseInt(Math.random()*100 + 1)
//         const backclr = document.body.style.backgroundColor = randomColor

        
//     })

// }
// setInterval(changeColor, 1000);
let setval;
const startChangingColor = function(){
    changeColor = function(){document.body.style.backgroundColor =  randomColor()}
    if(!setval){
        setval = setInterval(changeColor, 1000);
    }
}
const stopChangingColor=function(){
    console.log('stop')
    clearInterval(setval)
    setval = null;
    
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
