import Tareas from "../models/Tareas.js"

const nuevaTarea = async (req, res) => {
  const nuevaTarea = new Tareas(req.body)
  try {
    await nuevaTarea.save()
    res.json({ msg: "Tarea creada correctamenete" })
  } catch (error) {
    console.log(error)
  }
}
const editarTarea = async (req, res) => {
  const { id } = req.params
  const tarea = await Tareas.findById(id)
  if (!tarea) {
    const error = new Error("Tarea no encontrada")
    return res.status(400).json({ msg: error.message })
  }
  tarea.nombre = req.body.nombre || tarea.nombre
  tarea.descripcion = req.body.descripcion || tarea.descripcion
  tarea.categoria = req.body.categoria || tarea.categoria
  tarea.prioridad = req.body.prioridad || tarea.prioridad
  tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega

  try {
    await tarea.save()
    res.json({ msg: "Tarea editada con exito" })
  } catch (error) {
    console.log(error)
  }
}
const eliminarTarea = async (req, res) => {}

export { nuevaTarea, editarTarea }
