
// 18 - Crear un programa que transforme una frase en "notación hacker" (leet speak). 

const leetMap = {
  A: '4',  
  E: '3',  
  I: '1',  
  O: '0',  
  S: '5',  
  T: '7',  
};

function aLeet(texto) {
  let textoHacker= "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toUpperCase(); 
    textoHacker += leetMap[letra] || texto[i];
  }

  return textoHacker;
}


console.log(aLeet("Hola caracola"));

