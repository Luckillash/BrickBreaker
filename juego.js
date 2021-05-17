import Paleta from './paddle.js'
import ManejarInput from './input.js'
import Pelota from './pelota.js'
import { crearNivel, nivel1, nivel2 } from './niveles.js'

const ESTADOJUEGO = {
  PAUSA: 0,
  CORRIENDO: 1,
  MENU: 2,
  GAMEOVER: 3,
  NUEVONIVEL: 4,
}

export default class Juego {
  constructor(anchoJuego, largoJuego) {
    this.anchoJuego = anchoJuego
    this.largoJuego = largoJuego

    this.estadoJuego = ESTADOJUEGO.MENU
    this.paleta = new Paleta(this)
    this.pelota = new Pelota(this)

    this.vidas = 3

    this.ladrillos = []

    this.objetosJuego = []

    this.niveles = [nivel1, nivel2]
    this.nivelActual = 0

    new ManejarInput(this.paleta, this)
  }

  iniciar() {
    if (
      this.estadoJuego !== ESTADOJUEGO.MENU &&
      this.estadoJuego !== ESTADOJUEGO.NUEVONIVEL
    )
      return

    this.ladrillos = crearNivel(this, this.niveles[this.nivelActual])
    this.pelota.reset()
    this.objetosJuego = [this.pelota, this.paleta]

    this.estadoJuego = ESTADOJUEGO.CORRIENDO
  }

  update(tiempoDelta) {
    if (this.vidas === 0) this.estadoJuego = ESTADOJUEGO.GAMEOVER

    if (
      this.estadoJuego === ESTADOJUEGO.PAUSA ||
      this.estadoJuego === ESTADOJUEGO.MENU ||
      this.estadoJuego === ESTADOJUEGO.GAMEOVER
    )
      return

    if (this.ladrillos.length === 0) {
      this.nivelActual++
      this.estadoJuego = ESTADOJUEGO.NUEVONIVEL
      this.iniciar()
    }

    ;[...this.objetosJuego, ...this.ladrillos].forEach((objeto) =>
      objeto.update(tiempoDelta)
    )

    this.ladrillos = this.ladrillos.filter(
      (objeto) => !objeto.marcadoParaEliminar
    )
  }

  draw(ctx) {
    ;[...this.objetosJuego, ...this.ladrillos].forEach((objeto) =>
      objeto.draw(ctx)
    )

    if (this.estadoJuego == ESTADOJUEGO.PAUSA) {
      ctx.rect(0, 0, this.anchoJuego, this.largoJuego)
      ctx.fillStyle = 'rgba(0,0,0,0.5)'
      ctx.fill()

      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('Pausa', this.anchoJuego / 2, this.largoJuego / 2)
    }

    if (this.estadoJuego == ESTADOJUEGO.MENU) {
      ctx.rect(0, 0, this.anchoJuego, this.largoJuego)
      ctx.fillStyle = 'rgba(0,0,0,1)'
      ctx.fill()

      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText(
        'Apreta ESPACIO para iniciar',
        this.anchoJuego / 2,
        this.largoJuego / 2
      )
    }

    if (this.estadoJuego == ESTADOJUEGO.GAMEOVER) {
      ctx.rect(0, 0, this.anchoJuego, this.largoJuego)
      ctx.fillStyle = 'rgba(0,0,0,1)'
      ctx.fill()

      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('GAME OVER', this.anchoJuego / 2, this.largoJuego / 2)
    }
  }

  activarPausa() {
    if (this.estadoJuego == ESTADOJUEGO.PAUSA) {
      this.estadoJuego = ESTADOJUEGO.CORRIENDO
    } else {
      this.estadoJuego = ESTADOJUEGO.PAUSA
    }
  }
}
