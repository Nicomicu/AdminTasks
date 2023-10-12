import axios from "axios"

const newTaskrequest = async (tarea) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/tareas/newtask",
      tarea
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export default newTaskrequest
