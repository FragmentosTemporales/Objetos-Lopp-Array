let frutas = ["Manzana","Kiwi","Frutilla","Limón","Naranja"];

const buscarFruta = (array,elemento) => {
    for(let i = 0; i<array.length; i++) {
        if (array[i]== elemento){
            return true;
        }
    }
    return false;

};
console.log(buscarFruta(frutas, "Mango"));