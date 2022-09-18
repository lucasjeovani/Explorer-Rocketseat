
//variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const machineNumber = Math.round(Math.random() * 10)
let cont = 1

//eventos
btnTry.addEventListener('click', function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    
    if (Number(inputNumber.value) == machineNumber) {
        
       toggleScreen()
        //document.querySelector(".screen2 h2").innerText = `Acertou em ${cont} tentativas`
        screen2.querySelector('h2').innerText = `Acertou em ${cont} tentativas`
    }

    cont++
})
btnReset.addEventListener('click', handleRemoveClick)
document.addEventListener('keydown', clickEnter)


//funcões
// function handleTryClick (event) {
//     event.preventDefault()

//     const inputNumber = document.querySelector("#inputNumber")
    
//     if (Number(inputNumber.value) == machineNumber) {
        
//        toggleScreen()
//         //document.querySelector(".screen2 h2").innerText = `Acertou em ${cont} tentativas`
//         screen2.querySelector('h2').innerText = `Acertou em ${cont} tentativas`
//     }

//     cont++
// }

function handleRemoveClick () {
    toggleScreen()
    inputNumber.value = ''
    cont = 1
}

function toggleScreen() { 
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function clickEnter (event) {
    if( event.key == 'Enter')
    handleRemoveClick()
}