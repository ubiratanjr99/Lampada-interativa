//Variáveis que vão guardar os elementos.
var imagem = document.getElementById('img1')
var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')

//Funções para cada evento.
function ligar() {
    imagem.src = 'img/ligada.jpg'
}
function desligar() {
    imagem.src = 'img/desligada.jpg'
}
//Note que essa função vai desativar todas as outras quando for acionada.
//O objetivo é que a lâmpada permaneça quebrada até que se reinicie a página.
function quebrar() {
    imagem.src = 'img/quebrada.jpg'
    imagem.removeEventListener('mouseenter', ligar)
    imagem.removeEventListener('mouseout', desligar)
    b1.removeEventListener('click', ligar)
    b2.removeEventListener('click', desligar)
}

//Definição do eventListeners.
imagem.addEventListener('mouseenter', ligar)
imagem.addEventListener('mouseout', desligar)
imagem.addEventListener('dblclick', quebrar)
b1.addEventListener('click', ligar)
b2.addEventListener('click', desligar)
