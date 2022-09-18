/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let numberHuman = prompt("Digite o número de 0 á 10 que a máquina pensou.")
const machineNumber = Math.round(Math.random() * 10)  // Math.randon gerá um número aleatório entre 0 e 1, ambos não incluso, ex: 0.15, 0.98
//irá gerar um número aleatório de 0 a 10, Math.round arredonda um número para o mais próximo inteiro (1.6 = 2 ou 1.4 = 1)
let cont = 1


while (Number(numberHuman) != machineNumber) {
    numberHuman = prompt("Erro, tente novamente, número foi: " + machineNumber)
    
    cont ++
}

if (cont == 1) {
  alert (`Você acertou o número em ${cont} tentativa e o número é ${numberHuman}`)
} else {
  alert (`Você acertou o número em ${cont} tentativa(s) e o número é ${numberHuman}`)
}

