//control

function control(cubano){
    document.addEventListener("keyup", (evento) =>{
        
        switch(evento.code){
            case "Space":{
                cubano.lanzar()
                break;
            }
            case "ArrowDown": 
                cubano.bajar()
                break
            case "ArrowUp": 
                cubano.subir()
                break
        }
    })
}
