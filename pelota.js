import { detectarColision } from './colisionDetector.js'

export default class Pelota {
  constructor(juego) {
    this.imagen = document.getElementById('pelota')

    this.anchoJuego = juego.anchoJuego
    this.largoJuego = juego.largoJuego

    this.juego = juego

    this.tamaño = 16

    this.reset()
  }

  reset() {
    this.posicion = { x: 10, y: 400 }
    this.velocidad = { x: 4, y: -2 }
  }

  draw(ctx) {
    ctx.drawImage(
      this.imagen,
      this.posicion.x,
      this.posicion.y,
      this.tamaño,
      this.tamaño
    )
  }
  update(tiempoDelta) {
    this.posicion.x += this.velocidad.x
    this.posicion.y += this.velocidad.y

    //colisión izquierda o derecha

    if (
      this.posicion.x + this.tamaño > this.anchoJuego ||
      this.posicion.x < 0
    ) {
      this.velocidad.x = -this.velocidad.x
    }

    //colisión arriba

    if (this.posicion.y < 0) {
      this.velocidad.y = -this.velocidad.y
    }

    //colisión abajo

    if (this.posicion.y + this.tamaño > this.largoJuego) {
      this.juego.vidas--
      this.reset()
    }

    // colisión con paleta
    if (detectarColision(this, this.juego.paleta)) {
      this.velocidad.y = -this.velocidad.y
      this.posicion.y = this.juego.paleta.posicion.y - this.tamaño
    }
  }
}
