import Tarea from "../models/Tarea.js"

const newtask = async (req, res) => {
  const { columns } = req.body

  const validandoColumns = ["Pendiente", "En proceso", "Hecho"]
  if (!validandoColumns.includes(columns)) {
    const error = new Error("Por favor coloque un estado")
    return res.status(400).json({ msg: error.message })
  }
  let collectionName
  switch (columns) {
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
  try {
    const tareaAlmacenada = await Tarea.create(req.body)
    res.json(tareaAlmacenada)
  } catch (error) {
    console.log(error)
  }
}

const getAltTask = async (req, res) => {
  try {
    const tarea = await Tarea.find()

    if (!tarea) {
      const error = new Error("Tarea no Encontrada")
      return res.status(404).json({ msg: error.message })
    }
    res.json(tarea)
  } catch (error) {
    console.log(error)
  }
  // try {
  //   if (tareas.length === 0) {
  //     return res.status(200).json({ msg: "No hay tareas disponibles" })
  //   }

  // } catch (error) {
  //   console.error(error)
  //   res.status(500).json({ msg: "Error al obtener las tareas" })
  // }
}

const gettask = async (req, res) => {
  const { id } = req.params

  if (!id) {
    const error = new Error("Id de tarea no especificado")
    return res.status(400).json({ msg: error.message })
  }
  try {
    const tarea = await Tarea.findById(id)

    if (!tarea) {
      const error = new Error("Tarea no Encontrada")
      return res.status(404).json({ msg: error.message })
    }
    res.json(tarea)
  } catch (error) {
    console.log(error)
  }
}
const updateTask = async (req, res) => {
  const { id } = req.params
  const tarea = await Tarea.findById(id)

  if (!tarea) {
    const error = new Error("Tarea no encontrada")
    return res.status(400).json({ msg: error.message })
  }
  tarea.nombre = req.body.nombre || tarea.nombre
  tarea.columns = req.body.columns || tarea.columns
  tarea.fecha = req.body.fecha || tarea.fecha
  tarea.descripcion = req.body.descripcion || tarea.descripcion

  try {
    const tareaAlmacenada = await tarea.save()
    res.json(tareaAlmacenada)
  } catch (error) {
    console.log(error)
  }
}
const deletetask = async (req, res) => {
  const { id } = req.params
  const tarea = await Tarea.findById(id)
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

export { newtask, updateTask, deletetask, getAltTask, gettask }
