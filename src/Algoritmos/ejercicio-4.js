
// 4 - Crear un algoritmo que devuelva el factorial de un número. 

let n = 6;


if(Number.isInteger(n) && n > 0) {
    let result = 1;
    for(let i = 1; i <= n; ++i) {
    result *= i; 
    }
    console.log(result);

}else {
     console.log("Error. Tienes que introducir unn numero entero y positivo");
}



     


