import axios from "axios"

const forgetPasswordRequest = async (email) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/usuario/olvide-password",
      {
        email,
      }
    )

    return data
  } catch (error) {
    return { msg: error.message, error: true }
  }
}

export default forgetPasswordRequest
