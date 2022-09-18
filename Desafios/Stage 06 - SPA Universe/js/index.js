import { Router } from './router.js'
import {
    home,
    explorer,
    universe
} from './elements.js'

const router = new Router()


router.add(0,'/RocketSeatExplorer/Desafios/Stage 06 - SPA Universe/pages/home.html')
router.add('/universe','/RocketSeatExplorer/Desafios/Stage 06 - SPA Universe/pages/Universo.html')
router.add("/explorer",'/RocketSeatExplorer/Desafios/Stage 06 - SPA Universe/pages/Explorer.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

//events nav
function homeClick() {
    home.classList.toggle('link-bold')
    universe.classList.remove('link-bold')
    explorer.classList.remove('link-bold')
}

function universeClick() {
    home.classList.remove('link-bold')
    universe.classList.toggle('link-bold')
    explorer.classList.remove('link-bold')
}

function explorerClick() {
    home.classList.remove('link-bold')
    universe.classList.remove('link-bold')
    explorer.classList.toggle('link-bold')
}

home.addEventListener('click', function(){
    homeClick()
})
universe.addEventListener('click', function(){
    universeClick()
})
explorer.addEventListener('click', function(){
    explorerClick()
})
