function mostrarDatos() {
    var persona = {
        "nombre": "Juan",
        "edad": 30,
        "ciudad": "Madrid",
        "hobbies": ["leer", "viajar", "correr"]
    };
    var resultado = "Nombre: " + persona.nombre + "\n";
    resultado += "Edad: " + persona.edad + "\n";
    resultado += "Ciudad: " + persona.ciudad + "\n";
    resultado += "Hobbies: " + persona.hobbies.join(", ") + "\n";
    document.getElementById("resultado").textContent = resultado;
}
