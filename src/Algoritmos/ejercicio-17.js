// 17 - Crear un algoritmo que valide si un string tiene paréntesis balanceados.

function parentBalanceados(texto) {
  let parentAbiertos = [];

  if (texto) {
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === "(") {
        parentAbiertos.push(i);
      } else if (texto[i] === ")") {
        if (parentAbiertos.length === 0) {
          return false;
        } else {
          parentAbiertos.pop();
        }
      }
    }
    return parentAbiertos.length === 0;
  } else {
    return "Debe introducir el texto";
  }
}

console.log(parentBalanceados("ho() car(aco()"));


