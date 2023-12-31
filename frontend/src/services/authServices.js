import axios from "axios"

const authService = {
  getProfile: async () => {
    const token = localStorage.getItem("token")
    // if (!token) {
    //   const router = useRouter()
    //   router.push("/login")
    // }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(
        "http://localhost:4000/api/usuario/perfil",
        config
      )
      return response.data
    } catch (error) {
      console.log("error auth", error)
    }
  },
}

export default authService
