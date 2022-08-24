//Crear pista de audio
const musica = new Audio('../audio/touch-house.mp3')
musica.play()
//musica.loop = true


//Seleccionar el canvas
let canvas = document.getElementById('plano')
let ctx = canvas.getContext("2d")

//array
let cantpollos = []
let canttenderos = []

//imagenes
const imgCubano = new Image()
imgCubano.src = "../image/personaje.jpg"

const imgPollo = new Image()
imgPollo.src = "../image/pollo.jpg"

const imgTendero = new Image()
imgTendero.src =  "../image/tendero.jpg"

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



