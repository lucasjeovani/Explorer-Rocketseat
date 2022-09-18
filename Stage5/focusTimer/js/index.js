import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { 
    btnPause,
    btnPlay,
    btnSet,
    minutesDisplay,
    secondsDisplay,
    btnStop 
} from "./elements.js"


const controls = Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop
})

const timer = Timer ({
    minutesDisplay, 
    secondsDisplay,  
    resetControls: controls.reset, // pode ser qualquer nome para receber o valor da função
   
})

const sound = Sound() //nenhuma dependência na função criada.

Events({controls, sound, timer})



