// 1-
let receta = {};

// 2-
receta.nombre = 'Sandwich';

// 3-
receta.ingredientes = [];

// 4-
receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2,
});

// 5-
receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1,
});

// 6-
console.log(receta.ingredientes[0].nombre);

// 7-
const totalCantidad = receta.ingredientes.reduce((acumulador, ingrediente) => acumulador + ingrediente.cantidad, 0);
console.log("La cantidad total de ingredientes es: " + totalCantidad);
