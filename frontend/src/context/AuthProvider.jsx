"use client"
import { useRouter } from "next/navigation"
import { useState, createContext, useEffect } from "react"
import authService from "@/services/authServices"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      const handleProfile = async () => {
        try {
          const profileData = await authService.getProfile(token)
          setAuth(profileData)
          router.push("/listTask")
        } catch (error) {
          console.log("error auth", error)
        }
      }

      handleProfile()
    }
  }, [])

  const cerrarAuth = () => {
    setAuth({})
  }
  return (
    <AuthContext.Provider value={{ setAuth, cerrarAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
