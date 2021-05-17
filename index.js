import Juego from './juego.js'

let canvas = document.getElementById('pantallaJuego')

let ctx = canvas.getContext('2d')

var GAME_WIDTH = 800
var GAME_HEIGHT = 600

var juego = new Juego(GAME_WIDTH, GAME_HEIGHT)

var ultimaVez = 0

function loopJuego(tiempoSello) {
  var tiempoDelta = tiempoSello - ultimaVez
  ultimaVez = tiempoSello

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

  juego.update(tiempoDelta)
  juego.draw(ctx)

  requestAnimationFrame(loopJuego)
}

requestAnimationFrame(loopJuego)
