//creando pollos para unirlos al array
function crearPollo(){
    const pollosaleatorios = Math.floor(Math.random() * 100)
    if (pollosaleatorios === 3){
        const pollodibujado = new Pollo(420,320,30,50, imgPollo, "facil")
        cantpollos.push(pollodibujado)
        pollodibujado.imagen()
    }

    if (pollosaleatorios === 2){
        const pollodibujado2 = new Pollo(420,200,30,50, imgPollo)
        cantpollos.push(pollodibujado2)
        pollodibujado2.imagen()
    }

    if (pollosaleatorios === 1){
        const pollodibujado3 = new Pollo(420,80,30,50, imgPollo)
        cantpollos.push(pollodibujado3)
        pollodibujado3.imagen()
    }
}


//obtenerPuntos
function obtenerPuntos(pollos){
    ctx.fillStyle = "#000"
    ctx.font = "20px"
    ctx.fillText(`Pollos: ${pollos}`, 400, 30)
}


