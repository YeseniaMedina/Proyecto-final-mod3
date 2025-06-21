
// 6 - Crear un programa que calcule el número Fibonacci en laposición (n).

function fibonacciNumber(n) {
    if(n === 0) return 0;
    if(n===1) return 1;

    return fibonacciNumber(n-1) + fibonacciNumber(n-2);

    

}

console.log(fibonacciNumber(6));


// mirar si se puede hacer con un bucle.
