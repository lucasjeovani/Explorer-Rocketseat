/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let persons = [
{
  name: 'Lucas',
  age: 33,
  weigth: 90,
  heigth: 180
},
{
  name: 'Ludmila',
  age: 33,
  weigth: 70,
  heigth: 160
}
];

let namePerson = []

/*
Forma padrão de fazer o for

for (let index = 0; index < person.length; index ++) {
    namePerson [index] = person[index].name
}
alert (namePerson)
*/

//Forma nova de fazer o for

for (let person of persons) {
  namePerson.push(person.name)
}
alert (namePerson)