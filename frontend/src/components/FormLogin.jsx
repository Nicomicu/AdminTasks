"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Error from "@/components/Error"
import useAuth from "@/hooks/useAuth"
import loginRequest from "@/services/loginRequest"
import { LuUser2 } from "react-icons/lu"
import { AiOutlineLock } from "react-icons/ai"
import Logo from "./Logo"

const FormLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState(false)

  const { setAuth, handleprofile } = useAuth()

  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()

    if ([email, password].includes("")) {
      setAlerta({ msg: "Por favor rellene los campos", error: true })
      return
    }
    await loginRequest(email, password, setAuth)
    router.push("/listTask")
  }

  const { msg } = alerta

  return (
    <>
      <div className="flex h-screen">
        {" "}
        <div className="flex-shrink-0 w-full  lg:w-[83rem] h-full flex items-center justify-center mt-[-8rem]">
          {/* Añadimos clases flex y justify-center para centrar verticalmente el contenido */}
          <div className="text-center">
            <h1 className="text-6xl font-bold mt-20">
              Bienvenido a AdminTask
              <span className="block bg-[#3e7ee8] text-transparent bg-clip-text">
                Un administrador de tareas
              </span>
            </h1>

            {msg && <Error alerta={alerta} />}

            <div className="bg-white w-[40rem] h-[30rem] mt-20 rounded-xl mx-auto shadow-xl">
              <form onSubmit={handleLogin} className="p-10">
                <div className="flex-col items-center mt-[3rem]">
                  <label className="flex justify-start text-xl text-gray-400 p-1">
                    Email:
                  </label>
                  <div className="relative flex items-center justify-center">
                    <LuUser2 className="text-black text-2xl absolute left-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ingrese su correo"
                      className="outline-none bg-gray-100 p-4 rounded-lg text-gray-500 w-full shadow-md pl-10"
                    />
                  </div>

                  <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
                    Password:
                  </label>
                  <div className="relative flex items-center justify-center">
                    <AiOutlineLock className="text-black text-2xl absolute left-3" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingrese su contraseña"
                      className="outline-none bg-gray-100 p-4 rounded-lg text-gray-500 w-full shadow-md pl-10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-gray-100 hover:bg-gray-200 p-4 rounded-xl w-full mt-20 uppercase shadow-xl hover:transition-colors text-gray-500">
                    Iniciar sesión
                  </button>
                </div>
              </form>

              <nav className="lg:flex lg:justify-between mt-5">
                <Link
                  href="/registro"
                  className="block text-center my-3 text-slate-500 uppercase text-sm">
                  Regístrate si no tienes una cuenta
                </Link>
                <div className="top-28">
                  <Link
                    href="/olvidastePassword"
                    className="block text-center my-3 text-slate-500 uppercase text-sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-t from-[#3e7ee8] via-[#5d8edc] to-[#6fa0e8] shadow-lg">
          <div>
            <Image
              src="/taskimagen.png"
              alt="Descripción de la imagen"
              width={600}
              height={400}
              className="object-cover top-20 "
            />
            <div className="absolute top-0 right-0 p-2 mr-2">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormLogin
