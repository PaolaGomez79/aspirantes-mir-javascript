function join(array) {
    let resultado = '';
    for (let i = 0; i < array.length; i++) {
      resultado += array[i];
      if(i !== array.length - 1) resultado += ' ';
    }
    return resultado;
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""