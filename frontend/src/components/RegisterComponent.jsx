"use client"

import { useState } from "react"
import Image from "next/image"
import axios from "axios"
import Link from "next/link"
import Error from "@/components/Error"
import Logo from "./Logo"

const RegisterComponent = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repetir, setRepetir] = useState("")
  const [alerta, setAlerta] = useState(false)

  const handleForm = async (e) => {
    e.preventDefault()
    if ([nombre, email, password, repetir].includes("")) {
      setAlerta({ msg: "Campos Obligatorios", error: true })
      return
    }

    if (password !== repetir) {
      setAlerta({ msg: "Las contraseñas son distintas", error: true })
      return
    }
    if (password > 6) {
      setAlerta({ msg: "minimo 6 caracteres", error: true })
      return
    }
    setAlerta({})

    try {
      const { data } = await axios.post(`http://localhost:4000/api/usuario`, {
        nombre,
        email,
        password,
      })
      setAlerta({ msg: data.msg, error: false })

      setNombre("")
      setEmail("")
      setPassword("")
      setRepetir("")
    } catch (error) {
      console.log(error)
    }
  }
  const { msg } = alerta

  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Lado izquierdo */}
      <div className="flex-shrink-0 w-full lg:w-[83rem] h-full flex items-center justify-center mt-[-1rem]">
        <div className="text-center">
          <h1 className="text-6xl font-bold mt-20">
            Crea tu cuenta y{" "}
            <span className="block bg-[#3e7ee8] text-transparent bg-clip-text">
              administra tus tareas
            </span>
          </h1>
          {msg && <Error alerta={alerta} />}
          {/* Resto del formulario */}
          <div className="bg-white w-[640px] h-[720px] mt-20 rounded-xl mx-auto shadow-xl mb-32">
            <form onSubmit={handleForm} className="p-10">
              <div className="flex-col items-center mt-[48px] ">
                <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
                  Nombre:
                </label>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  type="text"
                  placeholder="Ingrese su Nombre"
                  className=" outline-none bg-gray-100 p-4 rounded-lg text-gray-500 w-full shadow-md"
                />
                <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
                  Email:
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Ingrese su corrreo"
                  className=" outline-none  bg-gray-100 p-4 rounded-lg text-gray-500 w-full shadow-md"
                />
                <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
                  Password:
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Ingrese su contraseña"
                  className=" outline-none  bg-gray-100  w-full p-4 rounded-lg text-gray-500 shadow-md"
                />

                <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
                  Repita su Password:
                </label>
                <input
                  value={repetir}
                  onChange={(e) => setRepetir(e.target.value)}
                  type="password"
                  placeholder="Ingrese nuevamente su password"
                  className="outline-none bg-gray-100  w-full p-4 rounded-lg text-gray-500 shadow-md"
                />
              </div>

              <button
                // onClick={}
                type="submit"
                className="bg-gray-100 hover:bg-gray-200 p-4 rounded-xl w-full mt-20 uppercase shadow-xl hover:transition-colors text-gray-500">
                Registrarme
              </button>
            </form>

            {/* Contenido del formulario */}

            <nav className="lg:flex lg:justify-between mt-10">
              <Link
                href="/login"
                className="block text-center my-4 text-slate-500 uppercase text-md ml-5">
                Inicia sesión
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Lado derecho con la imagen */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-t from-[#3e7ee8] via-[#5d8edc] to-[#6fa0e8] shadow-lg">
        <div>
          <Image
            src="/registerimagen.png"
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

export default RegisterComponent
