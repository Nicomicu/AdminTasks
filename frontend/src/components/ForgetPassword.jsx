"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Error from "@/components/Error"
import forgetPasswordRequest from "@/services/forgetPasswordRequest"
import Logo from "./Logo"

const ForgetPassword = () => {
  const [email, setEmail] = useState("")
  const [alerta, setAlerta] = useState(false)

  const handleForm = async (e) => {
    e.preventDefault()
    if ([email].includes("")) {
      setAlerta({ msg: "Campo Obligatorio", error: true })
      return
    }
    const data = await forgetPasswordRequest(email)
    setAlerta({
      msg: data.msg,
      error: false,
    })
  }
  const { msg } = alerta

  return (
    <div className="flex h-screen">
      {/* Lado izquierdo (formulario) */}
      <div className="flex-shrink-0 w-full lg:w-[83rem] h-full flex items-center justify-center mt-[-4rem]">
        <div className="text-center">
          <h1 className="text-6xl font-bold mt-20">
            Recupera tu cuenta para poder{" "}
            <span className="block bg-[#3e7ee8] text-transparent bg-clip-text">
              administrar tus tareas
            </span>
          </h1>

          {msg && <Error alerta={alerta} />}

          <div className="bg-white w-[40rem] h-[20rem] mt-20 rounded-xl mx-auto shadow-xl mb-32">
            <form onSubmit={handleForm} className="p-10">
              <div className="flex-col items-center mt-[1rem]">
                <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
                  Email:
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Ingrese su correo"
                  className="outline-none bg-gray-100 p-4 rounded-lg text-gray-500 w-full shadow-md"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-100 hover:bg-gray-200 p-4 rounded-xl w-full mt-10 uppercase shadow-xl hover:transition-colors text-gray-500">
                Enviar
              </button>
            </form>
            <nav className="lg:flex lg:justify-center mt-10">
              <Link
                href="/login"
                className="block text-center my-4 text-slate-500 uppercase text-md">
                ¿Recuperaste tu contraseña? Inicia sesión
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Lado derecho con la imagen */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-t from-[#3e7ee8] via-[#5d8edc] to-[#6fa0e8] shadow-lg">
        <div>
          <Image
            src="/passwordimagen.png"
            alt="Descripción de la imagen"
            width={600}
            height={400}
            className="object-cover top-20"
          />
          <div className="absolute top-0 right-0 p-2 mr-2">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
