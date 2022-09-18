export default function() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/ljeovani/main/blob/main/audio/Madonna%20-%20Frozen%20(Sickick%20TikTok%20Remix)%20%5BBass%20Boosted%5D.mp3?raw=true")

    bgAudio.loop = true //loop é uma propriedade e recebe verdadeiro para sempre ficar tocando no fundo.

    function pressButton() {
        buttonPressAudio.play() //play função global referente ao atributo new Audio
    }

    function timerEnd() {
        kitchenTimer.play()
    }
    return {
        pressButton, 
        timerEnd, 
        bgAudio 
    }

}

