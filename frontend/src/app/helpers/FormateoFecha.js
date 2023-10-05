export const formateoFecha = (fecha) => {
  const nuevaFecha = new Date(fecha.split("T")[0].split("-"))
  const opciones = {
    weekday: "long",
    year: "numeric",
    moth: "long",
    day: "numeric",
  }
  return nuevaFecha.toLocaleDateString("es-ES", opciones)
}
