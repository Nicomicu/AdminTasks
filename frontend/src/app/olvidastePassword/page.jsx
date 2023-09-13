"use client"
import { useState } from "react"
import Link from "next/link"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Recupere su cuenta para poder{""}
        <span className="block text-[#7c44f3] bg-gradient-to-r from-violet-300 to-violet-600 text-transparent bg-clip-text     ">
          {" "}
          administrar sus tareas
        </span>
      </h1>
      <div className="bg-[#393c71] w-[40rem] h-[20rem] mt-20 rounded-xl mx-auto shadow-xl mb-32">
        <form onSubmit={handleForm} className="p-10">
          <div className="flex-col items-center mt-[1rem]  ">
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Ingrese su correo"
              className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1a2040] p-4 rounded-xl w-full mt-10 uppercase shadow-xl hover:transition-colors text-gray-500 ">
            Enviar
          </button>
        </form>
        <nav className="lg:flex lg:justify-center mt-10">
          <Link
            href="/login"
            className="block text-center my-4 text-slate-500 uppercase text-md ">
            ¿Recuperaste tu contraseña? Inicia sesion
          </Link>
        </nav>
      </div>
    </>
  )
}

export default ForgotPassword
