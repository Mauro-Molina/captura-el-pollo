//creando pollos para unirlos al array
function crearPollo(){
    const pollosaleatorios = Math.floor(Math.random() * 150)
    if (pollosaleatorios === 3){
        const pollodibujado = new Pollo(1020,320,30,50, imgPollo, "facil")
        cantpollos.push(pollodibujado)
        pollodibujado.imagen()
    }

    if (pollosaleatorios === 2){
        const pollodibujado2 = new Pollo(1020,200,30,50, imgPollo)
        cantpollos.push(pollodibujado2)
        pollodibujado2.imagen()
    }

    if (pollosaleatorios === 1){
        const pollodibujado3 = new Pollo(1020,80,30,50, imgPollo)
        cantpollos.push(pollodibujado3)
        pollodibujado3.imagen()
    }
}

//creando tenderos para unirlos al array
function crearTenderos(){
    const tenderosAleatorios = Math.floor(Math.random() * 200)
    if (tenderosAleatorios === 3){
        const tenderodibujado = new Pollo(1020,320,30,50, imgTendero)
        canttenderos.push(tenderodibujado)
        tenderodibujado.imagen()
    }

    if (tenderosAleatorios === 2){
        const tenderodibujado2 = new Pollo(1020,200,30,50, imgTendero)
        canttenderos.push(tenderodibujado2)
        tenderodibujado2.imagen()
    }

    if (tenderosAleatorios === 1){
        const tenderodibujado3 = new Pollo(1020,80,30,50, imgTendero)
        canttenderos.push(tenderodibujado3)
        tenderodibujado3.imagen()
    }
}


//obtenerPuntos
function obtenerPuntos(pollos){
    ctx.fillStyle = "#000"
    ctx.font = "30px Verdana"
    ctx.fillText(`Pollos: ${pollos}`, 430, 35)
    //ctx.fillText(`Distancia 0`, 600, 35)
}


