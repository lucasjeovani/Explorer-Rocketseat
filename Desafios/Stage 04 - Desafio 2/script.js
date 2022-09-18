/*
- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let students = [
{
    name: 'Lucas',
    avOne: 9,
    avTwo: 3,
},
{
    name: 'Ludmila',
    avOne: 10,
    avTwo: 10,
},
{
    name: 'Jean',
    avOne: 4,
    avTwo: 9
},
{
    name: 'Cassiana',
    avOne: 10,
    avTwo: 7
}
]

function avarage (avOne, avTwo) {
    return ((avOne + avTwo) / 2).toFixed(2)
}

const printMessage = (student) => {

    if (avarage(student.avOne, student.avTwo) >= 7) {
       return  `Parabéns ${student.name} você foi aprovado(a) no concurso com sucesso, pois sua média foi de: ${avarage(student.avOne, student.avTwo)}`
    } else {
       return  `Não foi dessa vez ${student.name}, pois sua média foi de: ${avarage(student.avOne, student.avTwo)}, mas não desista continue estudando!`
    }
}

for (let student of students) {
    let dataStudent = printMessage(student)

    alert (dataStudent)
}