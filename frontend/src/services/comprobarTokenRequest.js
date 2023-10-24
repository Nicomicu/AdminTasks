import axios from "axios"

const comprobarTokenRequest = async () => {
  try {
    await axios(`http://localhost:4000/api/usuario/olvide-password`)
  } catch (error) {
    console.log(error)
  }
}
export default comprobarTokenRequest
