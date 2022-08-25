//Crear pista de audio
const musica = new Audio('../audio/touch-house.mp3')
//musica.loop = true

let start = document.getElementById("play")
let cabecera = document.getElementById("cabecera")
let instrucciones = document.getElementById("instrucciones")


//Seleccionando los id de los modales
const modalWin = document.querySelector(".modal-win");
const closeWin = document.querySelector(".close-win");
const modalLost = document.querySelector(".modal-lost");
const closeLost = document.querySelector(".close-lost");

start.addEventListener("click", () =>{
    cabecera.style.display = 'none'
    instrucciones.style.display = 'none'
    musica.play()
    clearInterval()
    game()
})


//Seleccionar el canvas
let canvas = document.getElementById('plano')
let ctx = canvas.getContext("2d")

//array
let cantpollos = []
let canttenderos = []

//imagenes
//const imgCubano = new Image()
//imgCubano.src = "../image/personaje.jpg"

const imgPollo = new Image()
imgPollo.src = "../image/pollo.jpg"

const imgTendero = new Image()
imgTendero.src =  "../image/tendero.jpg"

//generando imagenes gif

const cero = new Image()
cero.src =  "../image/gif/0.gif"

const uno = new Image()
uno.src =  "../image/gif/1.gif"

const dos = new Image()
dos.src =  "../image/gif/2.gif"

const tres = new Image()
tres.src =  "../image/gif/3.gif"

const cuatro = new Image()
cuatro.src =  "../image/gif/4.gif"

const cinco = new Image()
cinco.src =  "../image/gif/5.gif"

const seis = new Image()
seis.src =  "../image/gif/6.gif"

const siete = new Image()
siete.src =  "../image/gif/7.gif"

const ocho = new Image()
ocho.src =  "../image/gif/8.gif"

const nueve = new Image()
nueve.src =  "../image/gif/9.gif"

const diez = new Image()
diez.src =  "../image/gif/10.gif"

const duno = new Image()
duno.src =  "../image/gif/11.gif"

const ddos = new Image()
ddos.src =  "../image/gif/12.gif"

const dtres = new Image()
dtres.src =  "../image/gif/13.gif"

const dcuatro = new Image()
dcuatro.src =  "../image/gif/14.gif"

const dcinco = new Image()
dcinco.src =  "../image/gif/15.gif"

const dseis = new Image()
dseis.src =  "../image/gif/16.gif"

const dsiete = new Image()
dsiete.src =  "../image/gif/17.gif"

const docho = new Image()
docho.src =  "../image/gif/18.gif"

const dnueve = new Image()
dnueve.src =  "../image/gif/19.gif"

const veinte = new Image()
veinte.src =  "../image/gif/20.gif"

const vuno = new Image()
vuno.src =  "../image/gif/21.gif"

const vdos = new Image()
vdos.src =  "../image/gif/22.gif"

const vtres = new Image()
vtres.src =  "../image/gif/23.gif"

const vcuatro = new Image()
vcuatro.src =  "../image/gif/24.gif"

const vcinco = new Image()
vcinco.src =  "../image/gif/25.gif"

const vseis = new Image()
vseis.src =  "../image/gif/26.gif"

const vsiete = new Image()
vsiete.src =  "../image/gif/27.gif"

//arreglos de imagenes
const arrGif = [cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, duno, ddos, dtres, dcuatro, dcinco, dseis, dsiete, docho, dnueve, veinte, vuno, vdos, vtres, vcuatro, vcinco, vseis, vsiete]
let posicion = 0

//generate class 
class Cubano{
    constructor(x,y,w,h,vida,foto){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vida = vida
        this.foto  = foto
    }
    subir(){
        if(  this.y > 50){
            this.y -= 120
        }    
    }

    irAdelante(){
        if ( this.x < 650){
            this.x += 120
        }
    }

    bajar(){
        if(  this.y < 220){
            this.y += 120
        }
    }

    irAtras(){
        if (this.x > 50){
            this.x -= 120
        }
    }

    imagen(){
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.drawImage(this.foto, this.x, this.y, this.w, this.h)
    } 
}

class Pollo{
    constructor(x,y,w,h,foto){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.foto = foto
    }
    imagen(){
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.drawImage(this.foto, this.x, this.y, this.w, this.h)
        if(this.nivel === "facil"){
            this.x -= 1
        }else{
            this.x -= 3
        }
    }
}

class Tendero{
    constructor(x,y,w,h,foto){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.foto = foto
    }
    imagen(){
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.drawImage(this.foto, this.x, this.y, this.w, this.h)
    }
}



