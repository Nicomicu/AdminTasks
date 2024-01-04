"use client"
import { Menu } from "@headlessui/react"
import { useParams } from "next/navigation"
import useTask from "../../../hook/useTask"
import deleteRequest from "../services/deleteRequest"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const MenuDelete = ({ id }) => {
  const { setTarea, tareas, tarea } = useTask()

  // const params = useParams()
  // const { id } = params
  // if (Array.isArray(tarea)) {
  //   console.log("Es un arreglo")
  // } else {
  //   console.log("No es un arreglo")
  // }

  const handleDelete = async () => {
    try {
      await deleteRequest(id)
      const tareasActualizadas = tareas.filter(
        (tareaState) => tareaState._id !== id
      )
      setTarea(tareasActualizadas)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="py-1">
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={() => {
              handleDelete(tarea._id)
            }}
            className={classNames(
              active ? "bg-gray-100 text-red-400" : "text-gray-700",
              "block px-4 py-2 text-sm w-full text-left"
            )}>
            Eliminar
          </button>
        )}
      </Menu.Item>
    </div>
  )
}

export default MenuDelete
