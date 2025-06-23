
// 13 - Crear un algoritmo que sume todos los números de un array. 

let array = [2,20,5,10,15];
if(array.every((e) => typeof e === "number")) {
    let suma = array.reduce((acumulator, currentValue)=> acumulator + currentValue , 0);
    console.log(suma);
}else {
    console.log("El array contiene valores que no son números");
    
}



