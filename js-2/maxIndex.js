function maxIndex(numeros) {
    if (numeros.length === 0) return -1;  

    let indiceMax = 0;

    for(let i = 1; i < numeros.length; i++) {
        if(numeros[i] > numeros[indiceMax]) indiceMax = i;
    }
    return indiceMax;
}



console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1