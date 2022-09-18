import {
    btnPause,
    btnPlay,
    btnSet,
    btnSoundOff,
    btnSoundOn,
    btnStop
} from "./elements.js"

export default function  ({
    sound,
    controls,
    timer,
}) {

btnPlay.addEventListener('click', function pressPlay() {
    sound.pressButton()
    controls.play()
    timer.countDown()
}) 

btnPause.addEventListener('click', function pressPause() {
    controls.pause()
    timer.hold()
    sound.pressButton()
    
})

btnStop.addEventListener('click', function pressStop() { 
    controls.reset()
    timer.reset()
    sound.pressButton()
})

btnSoundOn.addEventListener('click', function pressSoundOn() {
    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
})

btnSoundOff.addEventListener('click', function pressSoundOff() {
    btnSoundOff.classList.add('hide')
    btnSoundOn.classList.remove('hide')
    sound.bgAudio.play()
})

btnSet.addEventListener('click', function pressSet() {
    
    let newMinutes = controls.getMinutes()

    if (!newMinutes){
        timer.reset()
        return
    } 
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})

}