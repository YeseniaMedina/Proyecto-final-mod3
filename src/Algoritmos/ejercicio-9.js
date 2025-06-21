// 9 - Escribir un algoritmo que determine si un año es bisiesto.


let anno = "2025";

if(anno) {
    if ((anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0) {
    console.log(`El año ${anno} es bisiesto`);
 } else {
    console.log(`El año ${anno} no es bisiesto`);
 }
}else {
    console.log("Debe introducir un año");
    
}

