
// Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

function conversion(valor, tipo) {
 if(tipo === "C") {
    let fahrenheit = valor * 9 / 5 + 32;
    console.log(`${valor}°C son ${fahrenheit}°F`);
    
 }else if(tipo === "F") {
    let celsius = (valor - 32) * 5 / 9;
    console.log(`${valor}°F son ${celsius}°C`);
    
 }else {
    console.log("El tipo de valor no es válido. Usa  C = celsius y F = Fahrenheit ");  
 }
}

conversion("50", "F");