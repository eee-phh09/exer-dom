let exibir = document.getElementById('exibir')

let excluir = document.getElementById('excluir')

exibir.addEventListener('click', function(){
    document.getElementById('apareci').innerText = 'apareci'
})

excluir.addEventListener('click', function(){
    document.getElementById('apareci').innerText = ''
})

