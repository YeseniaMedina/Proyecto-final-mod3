
// 20 - Un reloj muestra: -> la hora (0 <= h <= 23) -> los minutos (0 <= m <= 59)-> y los segundos (0 <= s <= 59).
//  Escribe una funcion que calcule los millisegundos que han pasado
//  desde media noche 00:00:00 hasta la hora actual teniendo en
//  cuenta que:– Hay 1000 millisegundos en un segundo
// – Podemos obtener la hora, minutos y segundos con la función
//  "getTime".

// No entendí bien lo del getTime(), asi que use parametros directamente.

function desdeMedianoche(hours, minutes, seconds) {
  if (
    hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 &&
    seconds >= 0 && seconds <= 59
  ) {
  let msHours = hours * 60 * 60 * 1000;
  let msMinutes = minutes * 60 * 1000;
  let msSeconds = seconds * 1000;

  return msHours + msMinutes + msSeconds;
   
  }else {
    return "Los datos introducidos no son válidos.Introduce datos dentro de los rangos";
  } 
}
 
console.log(desdeMedianoche(15, 45, 30));  

