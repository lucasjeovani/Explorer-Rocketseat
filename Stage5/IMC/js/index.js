import { Modal } from './modal.js'
import { AlertError } from './alert.js'
import { CalculateIMC, notNumber } from './utils.js'

//Variáveis do card
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function(event) {
   event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const verifyErrorWeightOrHeight = notNumber(weight) || notNumber(height)

    if (verifyErrorWeightOrHeight) {
        AlertError.open()
        return;
    } 

    AlertError.close()

    const result = CalculateIMC(weight, height)
    DisplayResult(result)
   
}

function DisplayResult(result) {
    // const message = `Seu IMC é de ${result}`
    // Modal.message.innerText = message
    // Modal.open()
    let message
    if (result <= 25){
        message = `Seu IMC é de ${result} - peso normal`
        
    } else if(result >= 25.1 && result <= 30) {
        message = `Seu IMC é de ${result} - Sobrepeso`
    }

    else if(result >= 30.1 && result <= 35) {
        message = `Seu IMC é de ${result} - Obesidade I`
    }

    else if(result >= 35.1 && result <= 40) {
        message = `Seu IMC é de ${result} - Obesidade II`
    }

    else if(result >= 40.1) {
        message = `Seu IMC é de ${result} - Obesidade III`
    }

    Modal.message.innerText = message
    Modal.open()
}

/*
O oninput vai sempre verificar se eu estou executando algo nele, 
então ele fecha a tela de erro de popup assim que começarmos a digitar.
*/
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

