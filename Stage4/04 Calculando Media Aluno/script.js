//Eu fazendo o código proposto 

let nameAluno = prompt ("Digite o Nome do Aluno!")
let note1 = prompt ("Digite a nota um!")
let note2 = prompt ("Digite a nota dois!")
let note3 = prompt ("Digite a Nota Três!")

note1 = Number(note1)
note2 = Number(note2)
note3 = Number(note3)

let result = note1 + note2 + note3
let media = result/3 
media = media.toFixed(2) //se for um número 7.3333333 ira escrever apenas 7.33.
const minimo = 6



if (media >= minimo ) {
    alert ("A média do aluno " + nameAluno + " é " + media + " . De os parabéns ao aluno e pessa para continuar estudando firme.")
} else if (media <= minimo) {
     alert ("A média do aluno " + nameAluno +  " é " + media + " . Ajude-o com as dificuldades sobre o conteúdo para ele conseguir se superar.")
}

