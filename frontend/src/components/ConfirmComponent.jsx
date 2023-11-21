"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import confirmRequest from "@/services/confirmRequest"
import Error from "@/components/Error"

const ConfirmComponent = () => {
  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams()
  const { id } = params

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const data = await confirmRequest(id)
        setCuentaConfirmada(true)
        setAlerta({ msg: data.msg, error: false })
      } catch (error) {
        setAlerta({
          msg: error.response ? error.response.data.msg : "Error en confirmar",
          error: true,
        })
      }
    }
    confirmAccount()
  }, [])

  const { msg } = alerta

  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Confirma tu cuenta para
        <span className="block bg-[#3e7ee8] text-transparent bg-clip-text">
          administrar tus tareas
        </span>
      </h1>

      {msg && <Error alerta={alerta} />}

      {cuentaConfirmada && (
        <Link
          href="/login"
          className="block text-center my-3 text-gray-500 uppercase text-md
      text-indigo">
          Inicia sesión aqui si tu cuenta ya fue confirmada
        </Link>
      )}
    </>
  )
}

export default ConfirmComponent
