document.querySelectorAll('.container').forEach((cuadrado) => {
cuadrado.addEventListener('click', function (event) {
    const element = event.target
    element.style.backgroundColor = 'black'
    });
    });
let colorGlobal;

document.addEventListener('keydown',function (event){
if(event.key === 'a'){
    colorGlobal = 'pink';
    
}
else if(event.key === 's'){
    colorGlobal = 'orange';
}
else if(event.key === 'd'){
    colorGlobal = 'cyan'
}
})

document.addEventListener('keydown',function (event){
    if(event.key2 === 'q'){
        colorGlobal = 'purple';
        
    }
    else if(event.key2 === 'w'){
        colorGlobal = 'gray';
    }
    else if(event.key2 === 'e'){
        colorGlobal = 'brown'
    }
    })
