// O USUÁRIO VAI DIGITAR 3 NUMEROS
// 1 - MOSTRAR O SOMAT´RORIO DESTES NUMEROS
// 2 - MOSTRAR QUAL FOI O MAIOR DIGITADO
// 3 - O PROGRAMA PARA DE SOLICITAR NUMEROS QUANDO O DIGITAR O NUMERO NEGATIVO
// A SOMA DOS NUMEROS NÃO DEVE CONSIDERAR O NUMERO NEGATIVO

const leia = require("prompt-sync")()

let num = 0
let contador = -1 
let total = 0
let maiorNum = 0
    
do {
    total = total + num
    if(num>maiorNum){
        maiorNum = num
    }
    contador ++
    num = parseInt(leia("Digite um número: "))

} while(num > 0)
console.log("Total: "+total)
console.log("Maior numero: "+maiorNum)
console.log("Contado: "+contador)