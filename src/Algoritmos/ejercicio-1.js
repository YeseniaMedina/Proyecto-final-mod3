//  1 - Escribir una función que determine si un número es par o impar. 

let number= Number(prompt("Introduce un número entero:"));



function NumberOddEven() {
    
    if(Number.isInteger(number) && number) {
        if(number % 2 === 0 ) {
        alert(`El número ${number} es par`); 
        
    
    }else if(number % 2 !== 0) {
        alert(`El número ${number} es impar`);
    }
    
        
    }else {
        alert(`El dato introducido no es válido`);
    }  
}
NumberOddEven();



