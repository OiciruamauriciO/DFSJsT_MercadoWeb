function alimentarCarro(e){
    let rutaAbsoluta = e.src;    
    //let largoRuta = (rutaAbsoluta.lengt);
    let rutaRelativa = "../.."+rutaAbsoluta.substring(21);
    nombreProducto = rutaAbsoluta.substring(33);
    let insertInModal=document.querySelector(".modal-body");
    let parentModalDiv = document.createElement("div");
    parentModalDiv.className = "card custom-modal-card";
    let cardImage = document.createElement("img");
    cardImage.className = "card-modal-img-top";
    cardImage.src=rutaRelativa;
    insertInModal.append(cardImage);
}