import { Router } from "./router.js"

const router = new Router()

router.add('/', '/RocketSeatExplorer/Stage6/SPA/pages/home.html')
router.add("/about", "/RocketSeatExplorer/Stage6/SPA/pages/about.html")
router.add("/contact", "/RocketSeatExplorer/Stage6/SPA/pages/contact.html")
router.add(404, "/RocketSeatExplorer/Stage6/SPA/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


