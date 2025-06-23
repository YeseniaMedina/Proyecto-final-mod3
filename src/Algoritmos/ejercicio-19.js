
// 19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.

function calcularSiglo(anno) {
  if (anno % 100 === 0) {
    return anno / 100;
  } else {
    return Math.floor(anno / 100) + 1;
  }
}

console.log(calcularSiglo(1901)); 

