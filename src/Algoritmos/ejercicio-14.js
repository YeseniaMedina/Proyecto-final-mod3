// 14 - Escribir un programa que verifique si dos strings son anagramas. 



function checkAnagrama (word1, word2) {
    let arrayword1 = word1.split("");
    let arrayword2 = word2.split("");
    if(word1 && word2){
        return arrayword1.every((e) => arrayword2.some((x) => x === e));  
    }else {
        return"Debe introducir dos textos";    
    }     
}

console.log(checkAnagrama("amor", "roma"));


