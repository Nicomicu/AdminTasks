"use client"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { TiDelete } from "react-icons/ti"
import { formateoFecha } from "@/app/helpers/FormateoFecha"
import { useState } from "react"

const ToDoCard = ({ tarea }) => {
  const [active, setActive] = useState(false)
  const { nombre, categoria, fecha, descripcion } = tarea
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: tarea._id,
    })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const handleDragStart = (event) => {
    const { active } = event
    const { id } = active
    setActive(id)
    event.preventDefault()
  }

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      onDragStart={handleDragStart}
      className="mt-2 bg-white rounded-lg space-y-2 drop-shadow-md mb-5">
      <div className="flex justify-between items-center p-3 font-medium ml-2">
        <p>{nombre}</p>
        <button className="text-red-400 hover:text-red-500">
          <TiDelete className="ml-5 h-10 w-10" />
        </button>
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
