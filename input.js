export default class manejarInput {
  constructor(paleta, juego) {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37:
          paleta.moverIzquierda()
          break

        case 39:
          paleta.moverDerecha()
          break

        case 27:
          juego.activarPausa()
          break

        case 32:
          juego.iniciar()
      }
    })

    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
          if (paleta.velocidad < 0) paleta.detener()
          break

        case 39:
          if (paleta.velocidad > 0) paleta.detener()
          break
      }
    })
  }
}
