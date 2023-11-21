"use client"
import axios from "axios"

const confirmRequest = async (id) => {
  try {
    const url = `http://localhost:4000/api/usuario/confirmar/${id}`
    const { data } = await axios(url)

    return data
  } catch (error) {
    console.log(error)
  }
}
export default confirmRequest
