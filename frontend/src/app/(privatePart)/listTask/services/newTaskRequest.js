import axios from "axios"

const newTaskRequest = async (tarea) => {
  try {
    const token = localStorage.getItem("token")
    if (!token) {
      throw new Error("Token not available")
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(
      "http://localhost:4000/api/tareas",
      tarea,
      config
    )

    return data
  } catch (error) {
    console.log(error)
  }
}

export default newTaskRequest
