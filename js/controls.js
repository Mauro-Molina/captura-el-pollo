//controles del juego

function control(cubano){
    document.addEventListener("keyup", (evento) =>{
        
        switch(evento.code){
            case "ArrowDown": 
                cubano.bajar()
                break
            case "ArrowUp": 
                cubano.subir()
                break
            case "ArrowRight":
                cubano.irAdelante()
                break
            case "ArrowLeft":
                cubano.irAtras()
                break
        }
    })
}
