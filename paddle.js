export default class Paleta {
  constructor(juego) {
    this.anchoJuego = juego.anchoJuego
    this.ancho = 150
    this.largo = 30

    this.velocidadMaxima = 10
    this.velocidad = 0

    this.posicion = {
      x: juego.anchoJuego / 2 - this.ancho / 2,
      y: juego.largoJuego - this.largo - 10,
    }
  }

  moverIzquierda() {
    this.velocidad = -this.velocidadMaxima
  }

  moverDerecha() {
    this.velocidad = this.velocidadMaxima
  }

  detener() {
    this.velocidad = 0
  }

  draw(ctx) {
    ctx.fillStyle = '#0ff'
    ctx.fillRect(this.posicion.x, this.posicion.y, this.ancho, this.largo)
  }

  update(tiempoDelta) {
    // this.posicion.x += 5 / tiempoDelta
    this.posicion.x += this.velocidad
    if (this.posicion.x < 0) this.posicion.x = 0
    if (this.posicion.x + this.ancho > this.anchoJuego)
      this.posicion.x = this.anchoJuego - this.ancho
  }
}
