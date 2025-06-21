
// 3 - Escribir una función que encuentre el número mayor en un array. 

function higherNumber(array) {
    
    let arrayNumber = array.sort((a, b) => b - a);
    console.log(arrayNumber[0]);
    
}

higherNumber([20, 1, 10, 105, 250, 5, 50, 30, 210]);