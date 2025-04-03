"use strict";

this.nombre= "dalto";

function saludar(){
    console.log(`Hola ${this.nombre}`);
}

const objeto = {
    nombre: "Lucas",
    saludar: console.log(`Hola ${this.nombre}`);
}

objeto.saludar()