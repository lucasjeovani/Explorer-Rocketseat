
let number1 = prompt("Digite o primeiro número")
let number2 = prompt("Digite o segundo número")

/*tratando os números, como o resultado do prompt é uma string, estamos de fato jogando os números para valerem como numerais utilizando 
o construtor Number () */

number1 = Number(number1)
number2 = Number(number2)

alert ("Soma: " + (number1 + number2))
alert ("Subtração: " + (number1 - number2))
alert ("Multiplicação: " + (number1 * number2))
alert ("Divisão: " + (number1/number2))
alert ("Resto Divisão: " + (number1%number2))


