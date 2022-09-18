
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnSet = document.querySelector('.set')
const btnStop = document.querySelector('.stop')
const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut


function resetControls () {

    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    btnSet.classList.remove('hide')
    btnStop.classList.add('hide')
}

//função para atualizar o display minutos e segundos
function updateTimerDisplay (minutes, seconds) {
    //atualização do display
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countDown () {
    
  timerTimeOut = setTimeout(function() {

        //conteúdo dos números no display
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        
        updateTimerDisplay(minutes, 0)

        //quando ambos forem igual a 0 para a contagem
        if (minutes <= 0 & seconds <= 0) {
            resetControls()
            //return é usado para a função parar quando chegar em 0
           return
        }
      
        
        if (seconds <= 0) {
            //deixando os segundos em 60 para decrementar
            seconds = 60

            //decrementando minutos e o código abaixo decrementa os segundos updateTImerDisplay(minutes, String(seconds -1))
            --minutes
        }
        //decrementando os segundos
        updateTimerDisplay(minutes, String(seconds - 1))

        //recursão a função ficará executando ela mesma até que haja interferência
        countDown()
    }, 1000)
}

btnPlay.addEventListener('click', function pressPlay() {

    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
    
    countDown()
}) 

btnPause.addEventListener('click', function pressPause() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    clearTimeout(timerTimeOut)
})

btnStop.addEventListener('click', function pressStop() { 
    resetControls()
    resetTimer()
})

btnSoundOn.addEventListener('click', function pressSoundOn() {
    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')
})

btnSoundOff.addEventListener('click', function pressSoundOff() {
    btnSoundOff.classList.add('hide')
    btnSoundOn.classList.remove('hide')
})

btnSet.addEventListener('click', function pressSet() {
    
    let newMinutes = Number(prompt('Quantos minutos?')) 

    if (!Number(newMinutes)){
        alert(`Confirme quando tiver números para definir o timer corretamente!
                                   Clique OK para voltar.`)
    } 
    
    if (!newMinutes) {
        resetTimer()
        return
    }
    minutes = newMinutes
    updateTimerDisplay(minutes, 0)

})
