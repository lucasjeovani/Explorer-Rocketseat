import {
    btnPlay,
    cardForests,
    cardRain,
    cardBusiness,
    cardfirePlace,
    volumeForests,
    volumeBusiness,
    volumeRain,
    volumeFirePlace
} from './elements.js'

export default function () {

function hideplay() {
    btnPlay.classList.add('hide')
}

function backPlay(){
    btnPlay.classList.remove('hide')
}

function selectBusiness(){
    cardForests.classList.remove("card-select")
    cardRain.classList.remove('card-select')
    cardBusiness.classList.toggle('card-select')
    cardBusiness.classList.toggle('btnColor')
    cardfirePlace.classList.remove('card-select')
    volumeBusiness.classList.toggle('volumeSelect')

    if(cardBusiness.classList.contains('card-bmode') == true){
        volumeBusiness.classList.toggle('volumeSelect')
    }
}

function selectFirePlace(){
    cardForests.classList.remove("card-select")
    cardRain.classList.remove('card-select')
    cardBusiness.classList.remove('card-select')
    cardfirePlace.classList.toggle('card-select')
    cardfirePlace.classList.toggle('btnColor')
    volumeFirePlace.classList.toggle('volumeSelect')

    if(cardfirePlace.classList.contains('card-bmode') == true){
        volumeFirePlace.classList.toggle('volumeSelect')
    }
}

function selectRain(){
    cardForests.classList.remove("card-select")
    cardRain.classList.toggle('card-select')
    cardRain.classList.toggle('btnColor')
    cardBusiness.classList.remove('card-select')
    cardfirePlace.classList.remove('card-select')
    volumeRain.classList.toggle('volumeSelect')

    if(cardRain.classList.contains('card-bmode') == true){
        volumeRain.classList.toggle('volumeSelect')
    }
}

function selectForest() {
    cardForests.classList.toggle('card-select')
    cardForests.classList.toggle('btnColor')
    cardRain.classList.remove('card-select')
    cardBusiness.classList.remove('card-select')
    cardfirePlace.classList.remove('card-select')
    volumeForests.classList.toggle('volumeSelect')
    if(cardForests.classList.contains('card-bmode') == true){
        volumeForests.classList.toggle('volumeSelect')
        
    }
}
return {
    selectBusiness,
    selectFirePlace,
    selectForest,
    selectRain,
    hideplay,
    backPlay,
}

}
