"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Error from "@/components/Error"
import newPasswordRequest from "@/services/newPasswordRequest"
import comprobarTokenRequest from "@/services/comprobarTokenRequest"

const NewPassword = () => {
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})

  const [tokenValido, setTokenValido] = useState(false)
  const [newPasswordModificado, setNewPasswordModificado] = useState(false)

  const params = useParams()
  const { token } = params

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        const password = await comprobarTokenRequest(token)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        })
      }
    }
    comprobarToken()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) {
      setAlerta({
        msg: "Mínimo 6 caracteres",
        error: true,
      })
      return
    }
    try {
      await newPasswordRequest(token, password)
      setAlerta({
        msg: "Contraseña actualizada con éxito",
        error: false,
      })
      setNewPasswordModificado(true)
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error)
      setAlerta({
        msg: error.response ? error.response.data.msg : "Error en la solicitud",
        error: true,
      })
    }
  }

  const { msg } = alerta

  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Cambia tu cuenta para
        <span className="block bg-[#3e7ee8] text-transparent bg-clip-text">
          administrar tus tareas
        </span>
      </h1>

      {msg && <Error alerta={alerta} />}

      {tokenValido && (
        <div className="bg-white w-[40rem] h-[17rem] mt-20 rounded-xl mx-auto shadow-xl mb-32">
          <form onSubmit={handleSubmit} className="p-5">
            <div className="flex-col items-center mt-[1rem]">
              <label className="flex justify-start text-xl text-gray-400 p-1">
                Nuevo password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Ingrese su nuevo password"
                className=" outline-none bg-gray-100 p-4 rounded-lg text-gray-500 w-full shadow-md"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-100 hover:bg-gray-200 p-4 rounded-xl w-full mt-10 uppercase shadow-xl hover:transition-colors text-gray-500">
              Actualizar Contraseña
            </button>
          </form>
        </div>
      )}

      {newPasswordModificado && (
        <Link
          className="block text-center mt-5 text-slate-500 uppercase text-md"
          href="/login">
          Inicia sesion
        </Link>
      )}
    </>
  )
}

export default NewPassword
