let coleccionCarros = [
    {
        placa: "XYZ777",
        numero_serie: "010203",
        modelo: "2024",
        marca: "Toyota",
        kilometraje: 25000,
        tipo: "SUV"
    },
    {
        placa: "LJK888",
        numero_serie: "987654",
        modelo: "2017",
        marca: "Ford",
        kilometraje: 2000,
        tipo: "Sedán"
    },
    {
        placa: "MNO123",
        numero_serie: "654321",
        modelo: "2023",
        marca: "Chevrolet",
        kilometraje: 66000,
        tipo: "camioneta"
    },
    {
        placa: "YET921",
        numero_serie: "789012",
        modelo: "2015",
        marca: "Renault",
        kilometraje: 48000,
        tipo: "hibrido"
    },
    {
        placa: "HIJ456",
        numero_serie: "123456",
        modelo: "2018",
        marca: "KIA",
        kilometraje: 3500,
        tipo: "deportivo"
    }
];
console.log(coleccionCarros);
'Ingrese la placa del carro a consultar'
let carroBuscado = coleccionCarros.find(carro => carro.placa === "XYZ777");
console.log(carroBuscado);

function actualizarCarro(placa, propiedad, nuevoValor) {
    'ingresar la placa del carro al que le va actualizar datos'
    let carro = coleccionCarros.find(carro => carro.placa === placa);
    
    if (carro) {
        // Si el carro fue encontrado, actualizar la propiedad
        carro[propiedad] = nuevoValor;
        console.log(`Carro con placa ${placa} actualizado:`);
        console.log(carro);
    } else {
        // Si no se encuentra el carro, mostrar un mensaje
        console.log(`No se encontró el carro con placa ${placa}.`);
    }
}
actualizarCarro("XYZ777", "modelo", "2022");  // Actualiza el modelo
actualizarCarro("HIJ456", "kilometraje", 35000);  // Actualiza el kilometraje

console.log(coleccionCarros);
