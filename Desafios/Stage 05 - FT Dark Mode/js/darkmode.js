import {
    buttons,
    cardForests,
    cardRain,
    cardBusiness,
    cardfirePlace,
    btnWhiteMode,
    btnDarkMode,
    bgBody,
    clock,
    volumeForests,
    volumeRain,
    volumeBusiness,
    volumeFirePlace
} from './elements.js'

export default function () {
    function darkMode() {
        cardForests.classList.add('card-bmode')
        cardBusiness.classList.add('card-bmode')
        cardRain.classList.add('card-bmode')
        cardfirePlace.classList.add('card-bmode')
        
        buttons.classList.add('btnColor')
    
        btnWhiteMode.classList.toggle('hide')
        btnDarkMode.classList.toggle('hide')
        bgBody.classList.add('DarkMode')
        bgBody.classList.remove('WhiteMode')
        clock.classList.toggle('timerBlackMode')
    
        volumeBusiness.classList.add('class', 'volumeSelect')
        volumeRain.classList.add('class', 'volumeSelect')
        volumeFirePlace.classList.add('class', 'volumeSelect')
        volumeForests.classList.add('class', 'volumeSelect')
    }
    
    function backWhiteMode() {
        cardForests.classList.remove('card-bmode')
        cardBusiness.classList.remove('card-bmode')
        cardRain.classList.remove('card-bmode')
        cardfirePlace.classList.remove('card-bmode')
        buttons.classList.remove('btnColor')
    
        btnDarkMode.classList.toggle('hide')
        btnWhiteMode.classList.toggle('hide')
        bgBody.classList.remove('DarkMode')
        bgBody.classList.add('WhiteMode')
        clock.classList.toggle('timerBlackMode')
    
        volumeBusiness.classList.remove('volumeSelect')
        volumeRain.classList.remove('volumeSelect')
        volumeFirePlace.classList.remove('volumeSelect')
        volumeForests.classList.remove('volumeSelect')
    }
    return {
        darkMode,
        backWhiteMode
    }
}