"use client"
import { formateoFecha } from "@/app/helpers/FormateoFecha"
import { useState } from "react"
import MenuEdit from "./MenuEdit"
import useModal from "../../hook/useModal"

const ToDoCard = ({ tarea }) => {
  const { handleMenuButtonClick } = useModal()
  const [active, setActive] = useState(false)
  const { nombre, columns, fecha, descripcion, id } = tarea

  return (
    <div className="mt-2 bg-white rounded-lg space-y-2 drop-shadow-md mb-5">
      <div className="flex justify-between items-center p-3 font-medium ml-2">
        <p>{nombre}</p>
        <MenuEdit id={id} />
      </div>
      <div className="bg-gray-50 w-[26rem] rounded-md p-5 mx-auto text-start text-sm font-normal text-black">
        {descripcion}
      </div>
      <p className="text-gray-600 text-start font-semibold text-sm p-2 mb-5 ">
        {formateoFecha(fecha)}
      </p>
    </div>
  )
}

export default ToDoCard
