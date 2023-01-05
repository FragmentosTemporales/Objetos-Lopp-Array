let carro = {
    color: "red",
    wheels: 4,
    engine: {
        size: 3.2,
        cylinders: 4,
    },
    materials: ["leather","plastic","iron"],
    isNew: true,
    releaseDate: null,
    type: "truck",
};

// console.log(carro);
// console.log("este carro es de color " + carro.color + " y tiene " +carro.wheels+ " ruedas.") 
// console.log(carro["color"], carro["isNew"], carro["engine"]["size"])

// agregar propiedades a un objeto
carro.type = "Suv";

//eliminar propiedades
delete carro.color;
console.log(carro)