
// 7 - Ordenar un array de números en orden ascendente (sin usar sort). 

let array = [5,20,2, 100,35, 50,7, 15,80,1,20];

for(let i = 0; i < array.length; ++i) {
    for(let x = i+1; x < array.length; ++x) {

    if(array[i] > array[x]) {
        let a = array[i];
        array[i] = array[x];
        array[x] = a;

    }
    }   
}
console.log(array);

