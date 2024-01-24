"use client"

import { useRouter } from "next/navigation"
import useTask from "@/app/(privatePart)/[id]/listTask/hook/useTask"
import useAuth from "@/hooks/useAuth"

const CloseSesion = () => {
  const { cerrarAuth } = useAuth()
  const { cerrarSesion } = useTask()

  const router = useRouter()

  const handleCerrarSesion = () => {
    cerrarAuth()
    cerrarSesion()
    localStorage.removeItem("token")

    router.push("/login")
  }

  return (
    <div className="fixed top-0 right-0 m-5">
      <button
        onClick={handleCerrarSesion}
        className="bg-[#3e7ee8] p-3 px-5 rounded-md text-white uppercase">
        Cerrar Sesión
      </button>
    </div>
  )
}

export default CloseSesion
