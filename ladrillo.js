import { detectarColision } from './colisionDetector.js'

export default class Ladrillo {
  constructor(juego, posicion) {
    this.imagen = document.getElementById('ladrillo')

    this.juego = juego

    this.posicion = posicion

    this.ancho = 80
    this.largo = 24

    this.marcadoParaEliminar = false
  }

  update() {
    if (detectarColision(this.juego.pelota, this)) {
      this.juego.pelota.velocidad.y = -this.juego.pelota.velocidad.y

      this.marcadoParaEliminar = true
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.imagen,
      this.posicion.x,
      this.posicion.y,
      this.ancho,
      this.largo
    )
  }
}
