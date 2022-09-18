/*
let persons = [
{
  name:'Lucas',
  age: 40,
  sexo: "Masculino",
  peso: 85
},
{
  name: 'Ludmila',
  age: 40,
  sexo: "Feminino",
  peso: 65
},
{
  name: 'Luna',
  age: 4,
  sexo: "Feminino",
  peso: 15
}
]

//anonima
const printPeso = function (peso) {
  return peso;
}

//arrow
const printSexo = (sexo) => {
  return sexo;
}

//Named
function Idade(idade) {
  return idade;
}

function printAge(person) {
  return `O nome do familiar é: ${person.name}, sua idade é de - ${Idade(person.age)}
  seu peso está em ${printPeso(person.peso)}Kg e seu sexo é - ${printSexo(person.sexo)}`
}

  for (let person of persons) {
    let ageMessage = printAge(person)
    alert(ageMessage)
  }
*/

let humans = []

function captureName (humans) {
for (var human of humans) { 
  human = prompt ('Digite o nome:')
}
  return human
}

captureName()


