let canvas = document.getElementById('plano')
let ctx = canvas.getContext("2d")

//array
//let cantpollos = []
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
        //this.top = top
        //this.bottom = bottom
    }
    subir(){
        let arriba = true
            this.y -= 120
            if (this.y === 140){
                this.y += 120
            } 
    }
    bajar(){
        this.y += 120
    }
    lanzar(){
        
    }
    imagen(){
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.drawImage(this.foto, this.x, this.y, this.w, this.h)
    }
    morirse(){}
    
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


