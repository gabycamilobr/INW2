// let equipe1 = 'Corinthians'
// let equipe2 = 'São Paulo'
// let equipe3 = 'Santos'
// let equipe4 = 'Palmeiras'

// let ponto1 = 3
// let ponto2 = 3
// let ponto3 = 3
// let ponto4 = 3

const leia = require("prompt-sync")()
//arrays ou vetores
let equipes = ['Corinthians','São Paulo','Santos','Palmeiras']
let pontos = [0,0,0,0]

for(let x=0; x<equipes.length; x++){
    console.log(equipes[x])
    pontos[x] = parseInt(leia("Digite quantos pontos: "))
}

console.log("TABELA")
console.log("TIME\tPONTOS")
for(let x=0; x<equipes.length; x++){
    console.log(equipes[x]+'\t'+pontos[x])
}

// console.log("TIME\tPONTOS")
// for(let i = 0; i<4; i++){
//     console.log(equipes[i]+'\t'+pontos[i])
// }


// console.log(equipes[0]+'\t'+pontos[0])                                                             
// console.log(equipes[1]+'\t'+pontos[1])
// console.log(equipes[2]+'\t'+pontos[2])
// console.log(equipes[3]+'\t'+pontos[3])