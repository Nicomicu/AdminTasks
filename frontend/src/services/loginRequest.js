import axios from "axios"

const loginRequest = async (email, password, setAuth) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/usuario/login",
      {
        email,
        password,
      }
    )
    localStorage.setItem("token", data.token)
    setAuth(data)
  } catch (error) {
    console.log(error)
  }
}

export default loginRequest
