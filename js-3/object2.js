let persona = {
    nombre: "Sofia",
    edad: 20,
    ciudad: "Avellaneda",
    profesion: "Estudiante"
};

// 2-
console.log(persona);

// 3-
function presentacion(persona) {
    return "Mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad;
};

// 4- 
const mensaje = presentacion(persona);

// 5-
console.log(mensaje);

// 6-
persona.hobbies = ["leer", "desarrollar", "viajar"];

// 7-
console.log(persona.hobbies);

// 8-
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
};
