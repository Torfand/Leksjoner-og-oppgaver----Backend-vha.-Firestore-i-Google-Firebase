function createDateTextToDisplay(dato){
    return dato.toLocaleString().replace(',', '').substr(0, 15)
}

function createDateTextToStore(dato) {
    return dato.toISOString().substr(0, 16).replace('T', ' ');
}

function createDateTextNowForStorage() {
   return createDateTextToStore(new Date());
}