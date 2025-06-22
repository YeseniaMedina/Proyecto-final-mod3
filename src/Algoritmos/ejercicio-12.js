
// 12 -Escribir una función que elimine los elementos duplicados de un array.

function removeDuplicates(array) {
    let finalArray = [];
   
    for(let i = 0; i < array.length; i++) {
        
        if(!finalArray.includes(array[i])) {
            finalArray.push(array[i]);
        }
    }
    return finalArray;
    

}

console.log(removeDuplicates([12, 33, 7, 21, 33, 33, 12, 40]));
