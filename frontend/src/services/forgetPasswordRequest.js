"use client"
import { useState } from "react"
import axios from "axios"

const forgetPasswordRequest = async () => {
  const [alerta, setAlerta] = useState(false)

  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/usuario/olvide-password",
      {
        email,
      }
    )
    return data
  } catch (error) {
    setAlerta({ msg: error.message, error: true })
  }
}

export default forgetPasswordRequest
