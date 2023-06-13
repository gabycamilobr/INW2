const leia = require("prompt-sync")()
//arrays ou vetores
let nomes = [0,0,0,0]
let notas = [0,0,0,0]


for(let x=0; x<nomes.length; x++){
    console.log(nomes[x])
    nomes[x] = leia("Digite os nomes: ")
    notas[x] = parseInt(leia("Digite as notas: "))
}

console.log("TABELA")
console.log("NOMES\tNOTAS\tESTADO")
for(let x=0; x<nomes.length; x++){
    console.log(nomes[x]+'\t'+notas[x]+'\t'+estado)
}