"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, createContext } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  const router = useRouter()
  const token = localStorage.getItem("token")

  const handleprofile = async () => {
    const config = {
      headers: {
        "content-type": "application/json",
        autorization: `Bearer ${token}`,
      },
    }
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/usuario/perfil",
        config
      )
      setAuth(data)
      router.push("/adminTask")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ setAuth, handleprofile }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
