"use client"

import { useState } from "react"
import axios from "axios"

const newPasswordRequest = async () => {
  const [alerta, setAlerta] = useState(false)

  try {
    const { data } = await axios.post(
      `http://localhost:4000/api/usuario/olvide-password/${token}`,
      { password }
    )
    setAlerta({
      msg: data.msg,
      error: false,
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

export default newPasswordRequest
