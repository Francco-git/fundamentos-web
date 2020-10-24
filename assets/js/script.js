/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por seletor: querySelector()
*/

let arma = window.document.getElementById("arma")
let trajes = document.querySelector("#trajes")
let skilldaarma = document.querySelector("#skilldaarma")
let armaOK = false
let trajesOK = false
let skilldaarmaOK = false
let mapa = document.querySelector('#mapa')

arma.style.width = "100%"
trajes.style.width = "100%"

function validaArma(){
    let txt = document.querySelector('#txtarma')
    if (arma.value.length <3){
        txt.innerHTML='Armamento Invalido'
        txt.style.color = 'red'
    }
    else{
       txt.innerHTML = 'Armamento Valido'
       txt.style.color = 'green'
       armaOk = true

    }
}
    function validatrajes(){
        let txt = document.querySelector("#txttrajes")
        if (trajes.value.indexOf("@") == -1 || trajes.value.indexOf('.') == -1){
            txt.innerHTML='Traje Invalido'
            txt.style.color = 'red'
        }
        else{
            txt.innerHTML = 'Traje Valido'
            txt.style.color = 'green'
            trajesOk = true

    }
    
}

function validaSkilldaarma(){
    let txt = document.querySelector("#txtskilldaarma")
    if (skilldaarma.value.length >= 100){
        txtskilldaarma.innerHTML = 'texto muito grande,digite no maximo 100 caracteres'
        txtskilldaarma.style.color = 'red'
        txtskilldaarma.style.display = 'block'
    }
    else {
        txt.skilldaarma.style.display = 'none'
        skilldaarmaOk = true

    }
}

function enviar(){
    if (armaOK == true && trajesOK == true && skilldaarmaOk ==true){
        alert('Formulario enviado com sucesso!')
    }
    else{
        alert ('Preencha o formulario corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}