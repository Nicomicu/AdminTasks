"use client"
import React, { createContext } from "react"
import { useState } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repetir, setRepetir] = useState("")
  const [alerta, setAlerta] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        nombre,
        setNombre,
        email,
        setEmail,
        password,
        setPassword,
        setAlerta,
        alerta,
        repetir,
        setRepetir,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider }
export default GlobalContext
