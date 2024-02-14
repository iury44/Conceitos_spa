import { Router } from "./router.js"

/* const routes = {
  "/home": "./assets/pages/home.html",
  "/universe" : "./assets/pages/universe.html",
  "/exploracao":  "./assets/pages/exploracao.html",
  404 : "./assets/pages/404.html"
}
 */

const router = new Router()

router.add("/home","./assets/pages/home.html")
router.add("/universe","./assets/pages/universe.html")
router.add("/exploracao","./assets/pages/exploracao.html")
router.add(404,"./assets/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
