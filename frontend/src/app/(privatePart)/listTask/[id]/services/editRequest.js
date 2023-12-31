import axios from "axios"

const editRequest = async (tarea, id) => {
  console.log(id)
  try {
    const { data } = await axios.put(
      `http://localhost:4000/api/tareas/${tarea.id}`,
      tarea
    )
    return data
  } catch (error) {
    console.log(error, error.response)
  }
}

export default editRequest
