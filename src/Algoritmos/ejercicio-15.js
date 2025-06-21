
// 15 - Crear un programa que devuelva los números primos hasta el número (n). 

let n = 100;

for(let i = 2; i <= n; i++) {
    let primo = true;
    for(let x = 2; x < i; x++) {
        if(i % x === 0) {
            primo = false;
            break;
        }
    }
    if(primo) {
        console.log(i);    
    }
}