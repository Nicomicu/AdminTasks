import axios from "axios"

const getTaskRequest = async (tareas) => {
  try {
    const token = localStorage.getItem("token")
    if (!token) return
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = await axios.get(
      `http://localhost:4000/api/tareas/${tareas}`,
      config
    )

    return data
  } catch (error) {
    console.log(error)
  }
}

export default getTaskRequest
