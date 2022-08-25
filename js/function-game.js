//function main game
function game(){
    let pollos = 0
    obtenerPuntos(pollos)//llamar a la funcion puntos  

    const cubano = new Cubano(50, 250, 180, 180, 100, uno)//crear el objeto cubano
    control(cubano)//llamar a los  controles
    cubano.imagen()//poner foto al objeto


    let intervalo = setInterval(()=>{
        ctx.clearRect(0,0,800,600)
        cubano.foto = arrGif[posicion]
        posicion++
        if(posicion === 27){
            posicion = 0
        }
        cubano.imagen()

        cantpollos.forEach((pollo, index) =>{
     
                pollo.imagen()
                if(pollo.x <= cubano.x+cubano.w-60 && 
                    pollo.x >= cubano.x-10 && 
                    pollo.y <= cubano.y + cubano.h-60 && 
                    pollo.y >= cubano.y-10){
                    cantpollos.splice(index, 1)
                    pollos += 2
                    if (pollos > 10){
                        clearInterval(intervalo)
                      
                        modalWin.style.visibility = "visible"
                        modalWin.style.opacity = 1

                        closeWin.addEventListener("click", ()=>{
                            modalWin.style.visibility = "hidden"
                            modalWin.style.opacity = 0
                        });
                        
                        musica.pause()
                    }
                   
                }
               
            }
        )
        obtenerPuntos(pollos)
        canttenderos.forEach((tendero, index) =>{
         //   console.log(canttenderos)
                tendero.imagen()
                if (tendero.x <= cubano.x + cubano.w-60 && 
                    tendero.x >= cubano.x-10 && 
                    tendero.y <= cubano.y + cubano.h-60 && 
                    tendero.y >= cubano.y-10){
                    canttenderos.splice(index, 1)
                    
                    if (pollos > 0 && pollos > 5){
                        pollos -=5

                    }else{
                        
                        modalLost.style.visibility = "visible"
                        modalLost.style.opacity = 1

                        closeLost.addEventListener("click", ()=>{
                            modalLost.style.visibility = "hidden"
                            modalLost.style.opacity = 0
                        });

                        reanudar.addEventListener("click", () =>{
                            modalLost.style.visibility = "hidden"
                            modalLost.style.opacity = 0
                            cabecera.style.display = 'none'
                            instrucciones.style.display = 'none'
                            musica.play()
                            clearInterval()
                            game()
                        })
                        
                        clearInterval(intervalo)
                        musica.pause()
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



