let quadrado1 = document.getElementById('quadrado1')

quadrado1.addEventListener('click', function(){
    
    console.log("entrou aqui")

    if(quadrado1.style.backgroundColor == "black" ){
        quadrado1.style.backgroundColor = "brown"        
    }else{
        quadrado1.style.backgroundColor = "black";
    }
})
let quadrado2 = document.getElementById('quadrado2')
quadrado2.addEventListener('click', function(){
    console.log("entrou aqui")

    if(quadrado2.style.backgroundColor == "red"){
        quadrado2.style.backgroundColor = "orange"
    }else{
        quadrado2.style.backgroundColor = "red"
    }
    
})

let quadrado3 = document.getElementById('quadrado3')
quadrado3.addEventListener('click', function(){
    console.log("entrou aqui")
    if(quadrado3.style.backgroundColor == "blue"){
        quadrado3.style.backgroundColor = "gray"
    }else{
        quadrado3.style.backgroundColor = "blue"
    }
})





