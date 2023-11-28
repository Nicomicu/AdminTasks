"use client"

import { useState } from "react"
import useTask from "../../hook/useTask"
import { toast } from "react-toastify"
import Error from "@/components/Error"
import newTaskRequest from "../services/newTaskRequest"
import TaskRadio from "./TaskRadio"

const NewTaskForm = () => {
  const [nombre, setNombre] = useState("")
  const [columns, setColumns] = useState("")
  const [fecha, setFecha] = useState(new Date())
  const [descripcion, setDescripcion] = useState("")

  const { tareas, alerta, setTareas } = useTask()
  // const { setIsOpen, handleClose } = useModal

  const handleFormTask = async (e) => {
    e.preventDefault()
    if ([nombre, columns, descripcion].includes("")) {
      toast.error("Por favor rellene los campos", {
        background: "#393c71",
        theme: "light",
      })

      return
    }

    const newTask = await newTaskRequest({
      nombre,
      columns,
      fecha,
      descripcion,
    })
    setTareas([...tareas, newTask])

    setNombre("")
    setColumns("")
    setFecha("")
    setDescripcion("")
  }

  const { msg } = alerta

  return (
    <div className="h-full">
      {msg && <Error alerta={alerta} />}

      <form onSubmit={handleFormTask}>
        <input
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value)
          }}
          type="text"
          placeholder="Nombre de la tarea"
          className="border border-gray-400 outline-none w-full bg-white p-4 rounded-lg text-gray-500 mt-2"
        />
        <TaskRadio columns={columns} setColumns={setColumns} />
        <label className="flex justify-start text-xl text-gray-500 mt-5 p-1">
          Fecha:
        </label>
        <input
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          type="date"
          className="outline-none bg-white w-full p-4 rounded-lg text-gray-500 shadow-md"
        />

        <label className="flex justify-start text-xl text-gray-500 mt-5 p-1">
          descripcion:
        </label>
        <input
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          type="descripcion"
          placeholder="Puede colocar alguna descripcion"
          className="outline-none bg-white w-full p-4 rounded-lg text-gray-500 shadow-md"
        />

        <button
          type="submit"
          className="bg-white text-gray-500 p-4 rounded-xl w-full mt-5 uppercase shadow-md hover:transition-colors hover:bg-slate-50">
          Añadir Tarea
        </button>
      </form>
    </div>
  )
}

export default NewTaskForm
