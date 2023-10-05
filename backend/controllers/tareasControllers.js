import Tareas from "../models/Tareas.js"

const newtask = async (req, res) => {
  const { categoria } = req.body

  const validandoCategoria = ["Borrador", "Pendiente", "En proceso", "Hecho"]
  if (!validandoCategoria.includes(categoria)) {
    const error = new Error("Por favor coloque una categoria")
    return res.status(400).json({ msg: error.message })
  }
  let collectionName
  switch (categoria) {
    case "Borrador":
      collectionName = "borradores"
      break
    case "Pendiente":
      collectionName = "pendientes"
      break
    case "En proceso":
      collectionName = "en_proceso"
      break
    case "Hecho":
      collectionName = "hechos"
      break
    default:
      break
  }

  const newTask = new Tareas(req.body)

  try {
    await newTask.save()
    res.json(categoria)
    res.json({ msg: "Tarea creada correctamente" })
  } catch (error) {
    console.log(error)
  }
}

const editask = async (req, res) => {
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
const deletetask = async (req, res) => {
  const { id } = req.params
  const tarea = await Tareas.findById(id)
  if (!tarea) {
    const error = new Error("Tarea no encontrada")
    return res.status(400).json({ msg: error.message })
  }
  try {
    await tarea.deleteOne()
    res.json({ msg: "Se elimino la tarea" })
  } catch (error) {
    console.log(error)
  }
}

export { newtask, editask, deletetask }
