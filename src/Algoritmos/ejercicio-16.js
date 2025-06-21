
// 16 - Escribir una función que convierta un número romano a número arábigo. 

function convertirRomano(num) {
    let numerosRomanos = {
        I: 1,
        V:5,
        X:10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;
    let romanRegex = /^[IVXLCDM]+$/i;

    if(typeof num === "string" && romanRegex.test(num) && num ) {
         for(let i = 0; i < num.length; i ++) {
        let currentValue = numerosRomanos[num[i]];

        let nextValue = numerosRomanos[num[i + 1]];
        
        if(currentValue < nextValue) {
            total -= currentValue;  
        }else {
            total += currentValue ;
        }
    }
    return total


    }else {
        return "Caracter inválido. Solo se permiten numeros romanos: I, V, X, L, C, D, M.";
        
    }  
}
console.log(convertirRomano("XIV"));

