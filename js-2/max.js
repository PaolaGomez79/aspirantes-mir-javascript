function max(numeros) {
    if (numeros.length === 0) undefined;  

    let numeroMax = numeros[0];

    for(let i = 1; i < numeros.length; i++) {
        if(numeros[i] > numeroMax) numeroMax = numeros[i];
    }
    return numeroMax;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined