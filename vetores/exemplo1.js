const leia = require("prompt-sync")()

let matricula = []
 matricula[0] = "M01"
 matricula[1] = "M02"
 matricula[2] = "M03"
 matricula[3] = "M04"

let nome = []
 nome[0] = "Marcos"
 nome[1] = "Paulo"
 nome[2] = "Pedro"
 nome[3] = "Maria"
 
let nota = [0,0,0,0]

console.log("MATRICULA\tNOME\tNOTA")

for(let i=0; i<matricula.length; i++){
    console.log(matricula[i]+"\t\t"+nome[i]+"\t"+nota[i])
}

aumax = leia("Digite a matrícula aqui: ").toUpperCase()
console.log(aumax)