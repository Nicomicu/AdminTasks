"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Error from "@/components/Error"
import newPasswordRequest from "@/services/newPasswordRequest"
import comprobarTokenRequest from "@/services/comprobarTokenRequest"

const NewPassword = () => {
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState(false)

  const [tokenValido, setTokenValido] = useState(false)
  const [newPassword, setNewPassword] = useState(false)

  const params = useParams()
  const { token } = params

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        const comprobarToken = await comprobarTokenRequest(token)
        setTokenValido(true)
      } catch (error) {
        console.log(error)
      }
    }
    comprobarToken()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password < 6) {
      setAlerta({
        msg: "Minimo 6 caracteres",
        error: true,
      })
      return
    }
    try {
      const newPassword = await newPasswordRequest(token, password)
      setAlerta({
        msg: newPassword.msg,
        error: false,
      })

      setNewPassword(true)
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true })
    }
  }
  const { msg } = alerta

  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Cambia tu cuenta para
        <span className="block text-[#7c44f3] bg-gradient-to-r from-violet-300 to-violet-600 text-transparent bg-clip-text">
          administrar tus tareas
        </span>
      </h1>

      {msg && <Error alerta={alerta} />}

      {tokenValido && (
        <div className="bg-[#393c71] w-[40rem] h-[17rem] mt-20 rounded-xl mx-auto shadow-xl mb-32">
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
                className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1a2040] p-4 rounded-xl w-full mt-10 uppercase shadow-xl hover:transition-colors text-gray-500">
              Actualizar Contraseña
            </button>
          </form>
        </div>
      )}

      {newPassword && (
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
