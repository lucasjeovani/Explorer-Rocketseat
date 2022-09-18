/*
- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

let numberOne = Number(prompt("Digite o primeiro número!"))
let numberTwo = Number(prompt("Digite o segundo número!"))

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo
let restDivision = numberOne % numberTwo

alert ("A soma dos números: " + sum)
alert ("A Subtração dos números: " + subtraction)
alert ("A multiplicação dos números:  " + multiplication)
alert ("A divisão dos números: " + division)
alert ("A o resto da divisão:  " + restDivision)


if (sum % 2 == 0 ) {
    alert ("Número é par")
} else {
    alert ("Número é impar")
}


if (numberOne == numberTwo) {
    alert (`Os números digitados são iguais pois ${numberOne} tem o mesmo valor que ${numberTwo}`)
} else {
    alert ("Os números são diferentes")
}
