/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

let fibonacci = []; 
let resFibo = calculaFibo()
fibonacci[0] = 0;
fibonacci[1] = 1;



function calculaFibo(){
    for (let i = 2; i <= 10; i++) {

        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        console.log(fibonacci[i]);
    }
}



/*calcula o número*/
let numero = []; 
let num = 4
let resNum = calculaNumero()

numero[0] = 0;
numero[1] = num;



function calculaNumero(){
    for (let i = 2; i <= 10; i++) {

        numero[i] = numero[i - 2] + numero[i - 1];
        console.log(numero[i]);
    }
}


function comparacao(resFibo, resNum){
    if (resFibo !== resNum){
        console.log("O número indicado não pertence a sequência fibonacci")
    }
    else{
        console.log('O número faz parte da sequência de fibonacci')
    }
}

console.log(comparacao())