"use client"

import { useState, useEffect } from "react"
import { Dialog } from "@headlessui/react"
import useTask from "../hook/useTask"
import { useParams } from "next/navigation"
import { toast } from "react-toastify"
import Error from "@/components/Error"
import newTaskRequest from "../services/newTaskRequest"
import TaskRadio from "./TaskRadio"

const FormComponent = () => {
  const [nombre, setNombre] = useState("")
  const [columns, setColumns] = useState("")
  const [fecha, setFecha] = useState(new Date())
  const [descripcion, setDescripcion] = useState("")
  const [id, setId] = useState("")

  const { alerta, tarea, tareas, setTareas, submitTarea } = useTask()

  // const { setIsOpen, handleClose } = useModal

  const params = useParams()

  useEffect(() => {
    if (tarea?._id) {
      setId(tarea._id)
      setNombre(tarea.nombre)
      setColumns(tarea.columns)
      setFecha(tarea.fecha?.split("T")[0])
      setDescripcion(tarea.descripcion)
      return
    }
    setId("")
    setNombre("")
    setColumns("")
    setFecha("")
    setDescripcion("")
  }, [tarea])

  const handleFormTask = async (e) => {
    e.preventDefault()

    if ([nombre, columns, descripcion].includes("")) {
      toast.error("Por favor rellene los campos", {
        background: "#393c71",
        theme: "light",
      })
      return
    }

    // const { data } = await newTaskRequest({
    //   nombre,
    //   columns,
    //   fecha,
    //   descripcion,
    //   id,
    // })
    await submitTarea({ id, nombre, columns, fecha, descripcion })
    // setTareas([...tareas, data])

    setId("")
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
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-bold text-gray-900">
              {id ? "Actualizar tarea" : "Crea una tarea"}
            </Dialog.Title>
          </div>
        </div>

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

        <input
          type="submit"
          value={id ? "Guardar cambios" : "Crear tarea"}
          className="bg-white text-gray-500 p-4 rounded-xl w-full mt-5 uppercase shadow-md hover:transition-colors hover:bg-slate-50"
        />
      </form>
    </div>
  )
}
export default FormComponent
