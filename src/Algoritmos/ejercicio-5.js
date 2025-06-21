
// 5 - Determinar si una palabra es un palíndromo. 

let palabra = "reconocer";
let reverseword= palabra.split("").reverse().join("");
let wordRegex= /^[a-zA-ZÀ-ÿçÇ]+$/;

if(palabra === reverseword && wordRegex.test(palabra) ) {

    console.log(`La palabra ${palabra} es un palíndromo`);
    
}else if (palabra !== reverseword && wordRegex.test(palabra)){

    console.log(`La palabra ${palabra} no es un palíndromo`);
    
}else {
    console.log("Dato introducido no válido");    
}

console.log();
