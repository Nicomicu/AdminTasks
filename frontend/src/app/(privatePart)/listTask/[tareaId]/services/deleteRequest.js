import axios from "axios"

const deleteRequest = async (id) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:4000/api/tareas/${id}`
    )
    return data
  } catch (error) {
    console.error("Error al eliminar la tarea:", error)
  }
}

export default deleteRequest
