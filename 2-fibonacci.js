/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

var infoNum = 9; //trocar esse número para diferentes resultados
var num = infoNum; //será usado no parâmetro
var sequenciaFibo = [];

function fibonacci(num){
    
    if(num < 2) {
        return num
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

for (let i = 0; i < infoNum+2; i++) {
    sequenciaFibo[i] =  fibonacci(i); //comparação número informado com a sequência de fibo calculada
    if(sequenciaFibo[i] === infoNum) {

        return console.log(`Você informou o número ${infoNum}, ele está na sequência de Fibonacci` )

    }
}

return console.log(`Você informou o número ${infoNum}, ele não está na sequência de Fibonacci`);


