import Ladrillo from './ladrillo.js'

export function crearNivel(juego, nivel) {
  var ladrillos = []

  nivel.forEach((fila, filaIndex) => {
    fila.forEach((ladrillo, ladrilloIndex) => {
      if (ladrillo === 1) {
        var posicion = { x: 80 * ladrilloIndex, y: 75 + 24 * filaIndex }
        ladrillos.push(new Ladrillo(juego, posicion))
      }
    })
  })
  return ladrillos
}

export const nivel1 = [
  // [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
]

export const nivel2 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
