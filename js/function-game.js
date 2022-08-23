//const pollodibujado = new Pollo(420,320,30,50, imgPollo)
let cantpollos = []
const pollodibujado = new Pollo(420,320,30,50, imgPollo)
const pollodibujado2 = new Pollo(420,200,30,50, imgPollo)
const pollodibujado3 = new Pollo(420,80,30,50, imgPollo)

function crearPollo(){
    const pollosaleatorios = Math.floor(Math.random() * 100)
    if (pollosaleatorios === 3){
       
        cantpollos.push(pollodibujado)
    }
}

//function main game
function game(){
    let pollos = 0
    obtenerPuntos(pollos)//llamar a la funcion puntos  

    const cubano = new Cubano(50, 250, 50, 150, 100, imgCubano)//crear el objeto cubano
    control(cubano)//llamar a los  controles
    cubano.imagen()//poner foto al objeto
    pollodibujado2.imagen()
    pollodibujado3.imagen()

    setInterval(()=>{
        ctx.clearRect(0,0,400,400)
        cubano.imagen()
       

            pollodibujado.imagen()
 
        
        //crearPollo()
    }, 500)
}

game()
