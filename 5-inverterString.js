// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverter(letras) {
    let fraseInversa = '';
    for (let i = letras.length - 1; i >= 0; i--){
        fraseInversa += letras[i];
    }
    return fraseInversa
}

console.log(inverter("Testando o programa de inversão de string"))

/*Outra forma menos verbosa de resolver é:

let frase = "Testando o programa de inversão de string";
let inverter = frase.split("").reverse().join("");
console.log(inverter);*/