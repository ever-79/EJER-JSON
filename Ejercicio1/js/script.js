var persona = {
    nombre: "Juan",
    Edad: "30",
    Ciudad: "Cali",
    Gustos: ["leer", "viajar", "correr"],
};

console.log(persona.nombre);
console.log(persona.Edad);
console.log(persona.Ciudad);
console.log(persona.Gustos);

//me convierte en un JSON
var personajson = JSON.stringify(persona);
console.log(personajson);

//convertir Json a objeto js

var cadenaJSON = '{"nombre":"Ana","edad":25,"ciudad":"Barcelona","hobbies":["pintar","bailar"]}';
var personaObj = JSON.parse(cadenaJSON);
console.log(personaObj.nombre); // Salida: Ana
console.log(personaObj.edad);   // Salida: 25
