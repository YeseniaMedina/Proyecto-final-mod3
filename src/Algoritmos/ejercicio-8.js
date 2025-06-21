
// 8 - Crear una función que cuente cuántas veces aparece un carácter en un string. 

function caracterRep(string, caracter) {
    let numCaracteres = 0;
    if (string && caracter) {
        let stringArray = string.split("");
        

        for (let i = 0; i < stringArray.length; ++i) {
            if (stringArray[i] === caracter) {
                numCaracteres++;
            } else {
                numCaracteres;
            }
        }
    } else {
        console.log("Debe introducir un dato");
    }

    console.log(`El caracter ${caracter} se repite${numCaracteres} veces.`);
    
}
caracterRep("hola caracola", "a");