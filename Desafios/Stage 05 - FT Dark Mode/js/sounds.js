import {
    volumeForests,
    volumeRain,
    volumeBusiness,
    volumeFirePlace
} from './elements.js'

export default function () {

const btnPressAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/PressBtn.mp3?raw=true")
const btnFlorestAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Songs%20of%20Florest.mp3?raw=true")
const btnRainAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Song%20of%20%20Rain.mp3?raw=true")
const btnBusinnesAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Song%20of%20Shooping.mp3?raw=true")
const btnFirePlaceAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Songs%20of%20Fire%20pit.mp3?raw=true")

btnFlorestAudio.loop = true
btnRainAudio.loop = true
btnBusinnesAudio.loop = true
btnFirePlaceAudio.loop = true  

let getAudioPlaying;

function stopSounds() {
      btnBusinnesAudio.pause(); 
      btnFirePlaceAudio.pause(); 
      btnFlorestAudio.pause(); 
      btnRainAudio.pause()
}

function pressButtonAudioClick() {
      btnPressAudio.play()
}

function verifyAudioPlaying(audio) {
      const verifyAudio = getAudioPlaying === audio 
      if (verifyAudio == true) {
          audio.pause()
          return true;
      }
      return false;
}

function audioPlayForest() {

    if (verifyAudioPlaying(btnFlorestAudio)) {
        return
      }
      if (getAudioPlaying) {
         getAudioPlaying.pause()
      }
        btnFlorestAudio.play()
        getAudioPlaying = btnFlorestAudio
}

function cardRainPlay() {
    
    if (verifyAudioPlaying(btnRainAudio)) {
        return
      }
      if (getAudioPlaying) {
        getAudioPlaying.pause()
      }
      btnRainAudio.play()
      getAudioPlaying = btnRainAudio
}

function cardBusinessPlay(){ 
    if (verifyAudioPlaying(btnBusinnesAudio)) {
        return
      }
      if (getAudioPlaying) {
        getAudioPlaying.pause()
      }
      btnBusinnesAudio.play()
      getAudioPlaying = btnBusinnesAudio
}

function cardfirePlacePlay() {
    if (verifyAudioPlaying(btnFirePlaceAudio)) {
        return
      }
      if (getAudioPlaying) {
        getAudioPlaying.pause()
      }
      btnFirePlaceAudio.play()
      getAudioPlaying = btnFirePlaceAudio
}

function sliderFlorest() {
    btnFlorestAudio.volume = volumeForests.value
}
function sliderRain(){
    btnRainAudio.volume = volumeRain.value
}
function sliderBusinnes(){
    btnBusinnesAudio.volume = volumeBusiness.value
}
function sliderFirePlace(){
    btnFirePlaceAudio.volume = volumeFirePlace.value
}
return {
    sliderBusinnes,
    sliderRain,
    sliderFlorest,
    sliderFirePlace,
    cardfirePlacePlay,
    cardBusinessPlay,
    cardRainPlay,
    audioPlayForest,
    stopSounds,
    pressButtonAudioClick
}
}