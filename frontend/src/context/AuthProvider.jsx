"use client"
import { useRouter } from "next/navigation"
import { useState, createContext, useEffect } from "react"
import authService from "@/services/authServices"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  const router = useRouter()

  useEffect(() => {
    const handleprofile = async () => {
      const token = localStorage.getItem("token")
      try {
        const profileData = await authService.getProfile(token)
        setAuth(profileData)
        router.push("/adminTask")
      } catch (error) {
        console.log(error)
      }
    }
    handleprofile()
  }, [])

  return (  
    <AuthContext.Provider value={{ setAuth }}>{children}</AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
