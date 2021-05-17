export function detectarColision(pelota, objetoJuego) {
  var abajoPelota = pelota.posicion.y + pelota.tamaño
  var arribaPelota = pelota.posicion.y

  var arribaObjeto = objetoJuego.posicion.y
  var izquierdaObjeto = objetoJuego.posicion.x
  var derechaObjeto = objetoJuego.posicion.x + objetoJuego.ancho
  var abajoObjeto = objetoJuego.posicion.y + objetoJuego.largo

  if (
    abajoPelota >= arribaObjeto &&
    arribaPelota <= abajoObjeto &&
    pelota.posicion.x >= izquierdaObjeto &&
    pelota.posicion.x + pelota.tamaño <= derechaObjeto
  ) {
    return true
  } else {
    return false
  }
}
