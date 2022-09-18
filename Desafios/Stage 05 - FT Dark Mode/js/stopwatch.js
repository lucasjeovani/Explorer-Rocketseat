import Sounds from './sounds.js'
let sounds = Sounds()

export default function StopWatch({
    minutesDisplay,
    secondsDisplay
}) {
    let timerOut;

function less(minutes) {
    if(minutes >= 5){
        minutesDisplay.innerText = (Number(minutes) - 5)
        
    } else {
        alert("Os minutos não podem ficar abaixo de 00:00")
    }
}

function sum(minutes) {
    if (minutes <= 55){
        minutesDisplay.innerText = Number(minutes) + 5
    } else {
        alert("O Timer segue a metodologia Pomodoro e só pode o máximo de 60:00 minutos")
    }
}

function stopTime() {
    clearTimeout(timerOut)
}

function sumFive() {
    let minutes = minutesDisplay.innerText
    sum(minutes)
}

function lessFive(){
    let minutes = minutesDisplay.innerText
    less(minutes)
}

function updateTimerDisplay (minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown(){   
   timerOut = setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);
        let finish = minutes <= 0 && seconds <= 0
        updateTimerDisplay(minutes, 0)
        
        if (finish){
            sounds.stopSounds()
            return
        }

        if(seconds <= 0){
        seconds = 60;
        --minutes
        } 
        updateTimerDisplay(minutes, String(seconds - 1))
        countDown()
    }, 1000);
}

return {
    countDown,
    stopTime,
    sumFive,
    lessFive
    }
}