import {
    minutesDisplay,
    secondsDisplay,

} from './elements.js'
import StopWatch from "./stopwatch.js"
import DarkMode from './darkmode.js'
import Controls from './controls.js'
import Sounds from './sounds.js'
import Events from './events.js'

const stopwatch = StopWatch({
    minutesDisplay,
    secondsDisplay
})
const darkMode = DarkMode()  
const controls = Controls()
const sounds = Sounds()
Events({stopwatch, darkMode, controls, sounds})

