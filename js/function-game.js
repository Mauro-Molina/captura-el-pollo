//function main game
function game(){
    let pollos = 0
    obtenerPuntos(pollos)//llamar a la funcion puntos  

    const cubano = new Cubano(50, 250, 50, 150, 100, imgCubano)//crear el objeto cubano
    control(cubano)//llamar a los  controles
    cubano.imagen()//poner foto al objeto


    let intervalo = setInterval(()=>{
        ctx.clearRect(0,0,800,600)
        cubano.imagen()

        cantpollos.forEach((pollo, index) =>{
        // console.log(pollo)
                pollo.imagen()
                if(pollo.x <= cubano.x+cubano.w && pollo.x >= cubano.x && pollo.y <= cubano.y + cubano.h && pollo.y >= cubano.y){
                    cantpollos.splice(index, 1)
                    pollos += 2
                    if (pollos > 20){
                        clearInterval(intervalo)
                        alert("Ha ganado el juego")
                    }
                   
                }
               
            }
        )
        obtenerPuntos(pollos)
        canttenderos.forEach((tendero, index) =>{
         //   console.log(canttenderos)
                tendero.imagen()
                if (tendero.x <= cubano.x + cubano.w && tendero.x >= cubano.x && tendero.y <= cubano.y + cubano.h && tendero.y >= cubano.y){
                    canttenderos.splice(index, 1)
                    
                    if (pollos > 0 && pollos > 5){
                        pollos -=5

                    }else{
                        alert("Game Over")
                        clearInterval(intervalo)
                    }
                } 
            }
        )
        
        let stop = document.getElementById("stop")
        stop.addEventListener("click", () =>{
            clearInterval(intervalo)
            musica.pause()
        })

      crearPollo()
      crearTenderos()
    }, 1000 /30)
}



