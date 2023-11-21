import axios from "axios"

const comprobarTokenRequest = async (token) => {
  try {
    await axios.get(
      `http://localhost:4000/api/usuario/olvide-password/${token}`
    )
  } catch (error) {
    console.log(error)
  }
}
export default comprobarTokenRequest
