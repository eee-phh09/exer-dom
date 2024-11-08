let button1 = document.getElementById('meuBotao1')
let button2 = document.getElementById('meuBotao2')

let contador = 0;

button1.addEventListener('click', function(){
    contador++;
    document.getElementById("contador").innerText = contador;
})

button2.addEventListener('click', function(){
    contador=0;
    document.getElementById("contador").innerText = contador;
})
