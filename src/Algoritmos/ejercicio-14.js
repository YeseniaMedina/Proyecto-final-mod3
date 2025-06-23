// 14 - Escribir un programa que verifique si dos strings son anagramas. 



function checkAnagrama (word1, word2) {
    
    if(word1 && word2){
         let array1 = word1.toLowerCase().split("").sort().join("");
         let array2 = word2.toLowerCase().split("").sort().join(""); 
         if(array1 === array2) {
            return true
         }else {
            return false;
         }
    }else {
        return"Debe introducir dos textos";    
    }     
}

console.log(checkAnagrama("amor", "roma"));


