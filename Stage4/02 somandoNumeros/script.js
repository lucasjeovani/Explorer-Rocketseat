
let numberOne = prompt ("Digite o primeiro número")
let numberTwo = prompt ("Digite o segundo númeo")

//alert (numberOne + numberTwo) concatena dois números pois temos duas strings, já que o prompt retorna String.
//alert (typeof numberOne) typeof retorna o tipo da variável, no caso ela retona o tipo String
//alert (Number(numberOne)+Number(numberTwo)) agora retorna o valor da soma, pois o Construtor Numero () identifica a variável agora como um número

/*alert ("O resultado da Soma: " + Number(numberOne) + Number(numberTwo)) no caso acima o resultado dará os dois numeros juntos pois está concatenado, o correto será colocar de outra forma especificando melhor o que vamos fazer ex: 
("O resultado da Soma: " + (Number(numberOne) + Number(numberTwo)) ) indicando melhor que queremos fazer a operação de soma e depois concatenar com a String, para mostrar em tela 'O resultado da Soma: 20' levando em conta que o primeiro e segundo número foram 10. */

/*alert(Number(numberOne) + Number(numberTwo) /2)
Se olharmos aqui e vermos que digitamos 10 + 10 o resultado teria que ser 10, porém o resultado em tela é 15, pois primeiro pega o Number(numberTwo)/2 e divide primeiro então segue como o exemplo de cima, tem que especificar como na matemática padrão, o que queremos fazer primeiro, pois a prioridade é a divisão nesse caso. Ex: 
alert ( (Number(numberOne) + Number(numberTwo)) /2)
*/

//essa forma abaixo é a melhor forma e mais aconselhável deixando o código mais legivel para outros e até para eu mesmo na hora de ler ele num futuro.

result = Number(numberOne) + Number(numberTwo)
alert ("A soma dos números é: " + result)