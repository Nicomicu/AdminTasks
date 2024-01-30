import axios from "axios"

const editRequest = async (tarea) => {
 
  try {
    const response = await axios.put(
      `http://localhost:4000/api/tareas/${tarea.id}`,
      tarea
    )
    return { data: response.data }
  } catch (error) {
    console.log(error, error.response)
  }
}

export default editRequest
