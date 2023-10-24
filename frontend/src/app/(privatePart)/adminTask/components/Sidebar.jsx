"use client"

import { GoChecklist } from "react-icons/go"
import { IoAddCircleOutline } from "react-icons/io5"
import { LiaSignInAltSolid } from "react-icons/lia"
import Link from "next/link"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"
import useTask from "../../hook/useTask"

const Sidebar = () => {
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
    <div
      className="fixed bg-[#7c44f3] lg:w-[130px] rounded-3xl lg:mx-2 lg:top-0 mb-2 mt-2 lg:justify-between
    sm:bottom-0 w-[24rem] md:w-[54rem] items-center">
      <ul
        className="pl-4 flex 
        lg:flex-col sm:bottom-0 justify-center lg:mt-10 ">
        <li
          className="sm:block p-3 px-5 lg:mb-10 hover:bg-[#1a2040]
          lg:rounded-tl-full lg:rounded-bl-full sm:hover:rounded-bl-full sm:rounded-br-full lg:rounded-none mb-2 transition-colors">
          <Link
            href="/listTask"
            className="block p-3 hover:text-white justify-center">
            <GoChecklist className="text-3xl" />
          </Link>
        </li>

        <li
          className="sm:block p-3 px-5 lg:mb-10 hover:bg-[#1a2040]
          lg:rounded-tl-full rounded-bl-full sm:hover:rounded-bl-full sm:rounded-br-full mb-2 lg:rounded-none  ">
          <Link
            href="/newtask"
            className="block items-center p-3 hover:text-white justify-center ">
            <IoAddCircleOutline className="text-3xl" />
          </Link>
        </li>

        <div className="lg:bottom-0">
          <button
            onClick={handleCerrarSesion}
            className="sm:block p-3 lg:hover:pr-20 hover:bg-[#1a2040]
       lg:rounded-tl-full rounded-bl-full sm:hover:rounded-bl-full sm:rounded-br-full lg:rounded-none mb-2 ">
            <LiaSignInAltSolid className="text-3xl" />
          </button>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
