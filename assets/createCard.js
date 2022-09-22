export function createCard(item){
    const div_image=document.createElement("div")
    div_image.className="image"
    const image=document.createElement("img")
    image.src=item.img
    div_image.append(image)

    const producto = document.createElement("h1")
    producto.textContent=item.producto

    const cardHeader=document.createElement("div")
    cardHeader.className="card__header"
    cardHeader.append(div_image,producto)
    

    const cardDescription=document.createElement("div")
    cardDescription.className="card__description"
    const descripcion = document.createElement("p")
    descripcion.textContent=item.descripcion
    cardDescription.append(descripcion)


    const cardFoot=document.createElement("div")
    cardFoot.className="card__foot"
    const boton = document.createElement("button")
    boton.textContent=item.boton
    cardFoot.append(boton)


    const card = document.createElement("div")
    card.className= `card ${item.theme}`
    card.append(cardHeader,cardDescription,cardFoot)

    return card
}