let botao = document.getElementById('botao')
let texto = document.getElementById('texto')


botao.addEventListener('click', function(){
    texto.innerText = prompt('texto original')

})

