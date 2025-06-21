
// 2 - Crear un algoritmo que invierta un string. 

let string = prompt("Introduce una palabra:");

function getReverseString (string) {
    let letrasRegex = /^[a-zA-ZÀ-ÿçÇ]+$/; 

    if(letrasRegex.test(string)) {
         alert (string.split("").reverse().join(""));

    }else {
        alert("Datos introducidos no válidos (solo se admiten letras)");
    }     
}

getReverseString(string);



