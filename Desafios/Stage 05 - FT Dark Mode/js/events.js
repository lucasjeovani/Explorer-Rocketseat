import {
    btnPlay,
    btnStop,
    btnMore,
    btnLess,
    cardForests,
    volumeForests,
    cardRain,
    volumeRain,
    cardBusiness,
    volumeBusiness,
    cardfirePlace,
    volumeFirePlace,
    btnDarkMode,
    btnWhiteMode
    
} from './elements.js'

export default function ({
    stopwatch,
    controls,
    sounds,
    darkMode
}) {

btnPlay.addEventListener("click", function() {
    stopwatch.countDown()
    controls.hideplay()
    sounds.pressButtonAudioClick()
})

btnStop.addEventListener('click', function(){
    stopwatch.stopTime()
    controls.backPlay()
    sounds.pressButtonAudioClick()
    sounds.stopSounds()
})

btnMore.addEventListener('click', function(){
    stopwatch.sumFive()
    sounds.pressButtonAudioClick()
})

btnLess.addEventListener('click', function(){
    stopwatch.lessFive()
    sounds.pressButtonAudioClick()
})

cardForests.addEventListener('click', function(){
    sounds.audioPlayForest()
    controls.selectForest()
})

volumeForests.addEventListener('input', function(){
    sounds.sliderFlorest()
})

cardRain.addEventListener('click', function(){
    sounds.cardRainPlay()
    controls.selectRain()
})

volumeRain.addEventListener('input', function(){
    sounds.sliderRain()
})

cardBusiness.addEventListener('click', function(){
    controls.selectBusiness()
    sounds.cardBusinessPlay()
})

volumeBusiness.addEventListener('input', function(){
    sounds.sliderBusinnes()
})

cardfirePlace.addEventListener('click', function(){
    sounds.cardfirePlacePlay()
    controls.selectFirePlace()
})

volumeFirePlace.addEventListener('input', function(){
    sounds.sliderFirePlace()
})

//black and white mode
btnDarkMode.addEventListener('click', function(){
    darkMode.backWhiteMode()
})

btnWhiteMode.addEventListener('click', function(){
    darkMode.darkMode()
})
}