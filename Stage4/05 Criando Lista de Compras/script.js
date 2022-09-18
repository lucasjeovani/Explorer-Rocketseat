/*Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula. */

  let itens = []

  for (let contador = 0; contador < 3; contador ++) { // essa instrução criando a variável item é para percorrer o for até o valor de 10, no caso 0 a 9 no array
   
    let itemName = prompt ("Digite o item " + (contador + 1)) //pedindo para digitar o item e o (item + 1) escreverá na tela o número que o item está
    itens[contador] = itemName

}

alert (itens)
