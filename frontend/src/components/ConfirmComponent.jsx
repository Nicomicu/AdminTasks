"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import axios from "axios"
import Error from "@/components/Error"
const ConfirmComponent = () => {
  const [alerta, setAlerta] = useState(false)
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams()
  const { id } = params

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `http://localhost:4000/api/usuario/confirmar/${id}`
        const { data } = await axios(url)
        setCuentaConfirmada(true)
        setAlerta({ msg: data.msg, error: false })
      } catch (error) {
        setAlerta({ msg: error.response.data.msg, error: true })
      }
    }
    confirmAccount()
  }, [])

  const { msg } = alerta

  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Confirma tu cuenta para
        <span className="block text-[#7c44f3] bg-gradient-to-r from-violet-300 to-violet-600 text-transparent bg-clip-text">
          administrar tus tareas
        </span>
      </h1>

      {msg && <Error alerta={alerta} />}

      {cuentaConfirmada && (
        <Link
          href="/login"
          className="block text-center my-3 text-slate-300 uppercase text-md
      text-indigo">
          Inicia sesión aqui si tu cuenta ya fue confirmada
        </Link>
      )}
    </>
  )
}

export default ConfirmComponent
