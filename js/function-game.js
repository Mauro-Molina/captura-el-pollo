//function main game
function game(){
    let pollos = 0
    obtenerPuntos(pollos)//llamar a la funcion puntos  

    const cubano = new Cubano(50, 250, 50, 150, 100, imgCubano)//crear el objeto cubano
    control(cubano)//llamar a los  controles
    cubano.imagen()//poner foto al objeto


    setInterval(()=>{
        ctx.clearRect(0,0,450,500)
        cubano.imagen()

        cantpollos.forEach((pollo, index) =>{
           // console.log(cantpollos)
                pollo.imagen()
                if(pollo.x <= cubano.x+cubano.w){
                    //eliminar elemento
                    //array.splice
                    pollos +=1
                }
            }
        )

        canttenderos.forEach((tendero, index) =>{
            console.log(canttenderos)
                tendero.imagen()
            }
        )
        


      crearPollo()
      crearTenderos()
    }, 1000 /30)
}

game()
