
//declarations
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const btnPlay = document.querySelector('.btnPlay')
const btnStop = document.querySelector('.btnStop')
const btnMore = document.querySelector('.btnMore')
const btnLess = document.querySelector('.btnLess')
const cardForests = document.querySelector('.cardForests')
const cardRain = document.querySelector('.cardRain')
const cardBusiness = document.querySelector('.cardBusiness')
const firePlace = document.querySelector('.firePlace')
let minutes = Number(minutesDisplay.textContent)
let timerOut;
const btnPressAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/PressBtn.mp3?raw=true")
const btnFlorestAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Songs%20of%20Florest.mp3?raw=true")
const btnRainAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Song%20of%20%20Rain.mp3?raw=true")
const btnBusinnesAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Song%20of%20Shooping.mp3?raw=true")
const btnFirePlaceAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Songs%20of%20Fire%20pit.mp3?raw=true")

//functions

function stopSounds() {
    btnBusinnesAudio.pause()
    btnFirePlaceAudio.pause()
    btnFlorestAudio.pause()
    btnRainAudio.pause()
}

function less(minutes) {
    updateTimerDisplay(minutes, 0)
    if(minutes >= 5){
        minutesDisplay.textContent = (Number(minutes) - 5)
        
    } else {
        alert("Os minutos não podem ficar abaixo de 00:00")
    }
}

function sum(minutes) {
    if (minutes <= 55){
        minutesDisplay.textContent = Number(minutes) + 5
    } else {
        alert("O Timer segue a metodologia Pomodoro e só pode o máximo de 60:00 minutos")
    }
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

function pressButton() {
    btnPressAudio.play()
}

//events
btnPlay.addEventListener("click", function() {
    countDown()
    btnPlay.classList.add('hide')
    pressButton()
})

btnStop.addEventListener('click', function(){
    clearTimeout(timerOut)
    btnPlay.classList.remove('hide')
    pressButton()
    stopSounds()
})

btnMore.addEventListener('click', function(){
    let minutes = minutesDisplay.textContent
    sum(minutes)
    pressButton()
})

btnLess.addEventListener('click', function(){
    let minutes = minutesDisplay.textContent
    less(minutes)
    pressButton()
})

cardForests.addEventListener('click', function(){
    cardForests.classList.add('iconColorSelect')
    btnFlorestAudio.play()
    btnFlorestAudio.loop = true
    cardRain.classList.remove('iconColorSelect')
    cardBusiness.classList.remove('iconColorSelect')
    firePlace.classList.remove('iconColorSelect')
    btnFirePlaceAudio.pause()
    btnBusinnesAudio.pause()
    btnRainAudio.pause()
})

cardRain.addEventListener('click', function(){
    cardForests.classList.remove("iconColorSelect")
    cardRain.classList.add('iconColorSelect')
    btnRainAudio.play()
    btnRainAudio.loop = true
    cardBusiness.classList.remove('iconColorSelect')
    firePlace.classList.remove('iconColorSelect')
    btnFirePlaceAudio.pause()
    btnBusinnesAudio.pause()
    btnFlorestAudio.pause()
})

cardBusiness.addEventListener('click', function(){
    cardForests.classList.remove("iconColorSelect")
    cardRain.classList.remove('iconColorSelect')
    cardBusiness.classList.add('iconColorSelect')
    btnBusinnesAudio.play()
    btnBusinnesAudio.loop = true
    firePlace.classList.remove('iconColorSelect')
    btnFirePlaceAudio.pause()
    btnFlorestAudio.pause()
    btnRainAudio.pause()
})

firePlace.addEventListener('click', function(){
    cardForests.classList.remove("iconColorSelect")
    cardRain.classList.remove('iconColorSelect')
    cardBusiness.classList.remove('iconColorSelect')
    firePlace.classList.add('iconColorSelect')
    btnFirePlaceAudio.play()
    btnFirePlaceAudio.loop = true    
    btnFlorestAudio.pause()
    btnBusinnesAudio.pause()
    btnRainAudio.pause()
})









