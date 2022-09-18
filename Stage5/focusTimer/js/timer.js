import sounds from "./sounds.js"

let music = sounds()

export default function Timer({
    minutesDisplay, 
    secondsDisplay,  
    resetControls,    
}) {

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

function updateDisplay (newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countDown () { 
    
  timerTimeOut = setTimeout(function() {

       
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateDisplay(minutes, 0)

       
        if (isFinished) {
            resetControls()
            updateDisplay()
            music.timerEnd()
           return
        }
      
        if (seconds <= 0) {
            seconds = 60
            --minutes
        }
        //decrementando os segundos
        updateDisplay(minutes, String(seconds - 1))

        //recursão a função ficará executando ela mesma até que haja interferência
        countDown()
    }, 1000)
}

function updateMinutes (newMinutes) {
    minutes = newMinutes
}

function hold() {
    clearTimeout(timerTimeOut) //função nativa para segurar algo, no caso o tempo.
}

return {
    countDown,
    reset,
    updateDisplay,              
    updateMinutes,
    hold                                                                  
}


}