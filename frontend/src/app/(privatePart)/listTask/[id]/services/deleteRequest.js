import axios from "axios"

const deleteRequest = async (id) => {
  try {
    await axios.delete(`http://localhost:4000/api/tareas/${id}`)
  } catch (error) {
    console.error("Error al eliminar la tarea:", error)
  }
}

export default deleteRequest
