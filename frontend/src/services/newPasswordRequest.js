"use client"

import axios from "axios"

const newPasswordRequest = async (token, password) => {
  try {
    const { data } = await axios.post(
      `http://localhost:4000/api/usuario/olvide-password/${token}`,
      { password }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export default newPasswordRequest
