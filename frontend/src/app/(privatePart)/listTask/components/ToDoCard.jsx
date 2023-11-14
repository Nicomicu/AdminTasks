"use client"

import { TiDelete } from "react-icons/ti"
import { formateoFecha } from "@/app/helpers/FormateoFecha"

const ToDoCard = ({ tarea }) => {
  const { nombre, categoria, fecha, descripcion } = tarea

  return (
    <div className="mt-2 bg-white rounded-lg space-y-2 drop-shadow-md mb-5">
      <div className="flex justify-between items-center p-3 font-medium ml-2">
        <p>{nombre}</p>
        <button className="text-red-500 hover:text-red-600">
          <TiDelete className="ml-5 h-10 w-10" />
        </button>
      </div>
      {/* <p className="flex justify-start  px-5 p-1 mx-5 bg-red-400 rounded-md w-[4rem] mt-5 font-medium text-sm text-center">
        {prioridad}
      </p> */}
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
