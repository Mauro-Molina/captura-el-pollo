//function main game
function game(){
    let pollos = 0
    obtenerPuntos(pollos)//llamar a la funcion puntos  

    const cubano = new Cubano(50, 250, 50, 150, 100, imgCubano)//crear el objeto cubano
    control(cubano)//llamar a los  controles
    cubano.imagen()//poner foto al objeto


    setInterval(()=>{
        ctx.clearRect(0,0,500,400)
        cubano.imagen()

        cantpollos.forEach((pollo, index) =>{
        // console.log(pollo)
                pollo.imagen()
                if(pollo.x <= cubano.x+cubano.w &&
                    pollo.x >= cubano.x &&
                    pollo.y <= cubano.y + cubano.h &&
                    pollo.y >= cubano.y){
                         cantpollos.splice(index, 1)
                    pollos += 1
                    console.log(pollos)
                    
                }
               
            }
        )
        obtenerPuntos(pollos)
        canttenderos.forEach((tendero, index) =>{
         //   console.log(canttenderos)
                tendero.imagen()
            }
        )
        


      crearPollo()
      crearTenderos()
    }, 1000 /30)
}

game()
