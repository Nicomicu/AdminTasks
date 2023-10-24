"use client"
import { useState } from "react"
import { toast } from "react-toastify"
import Error from "@/components/Error"
import useTask from "../../hook/useTask"
import newTaskRequest from "../services/newTaskRequest"

const NewTaskForm = () => {
  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState("")
  const [prioridad, setPrioridad] = useState("")
  const [fecha, setFecha] = useState(new Date())
  const [descripcion, setDescripcion] = useState("")

  const { tareas, alerta, setTareas } = useTask()

  const handleFormTask = async (e) => {
    e.preventDefault()
    if ([nombre, categoria, prioridad, descripcion].includes("")) {
      toast.error("Por favor rellene los campos", {
        background: "#393c71",
        theme: "dark",
      })

      return
    }

    const newTask = await newTaskRequest({
      nombre,
      categoria,
      prioridad,
      fecha,
      descripcion,
    })

    setTareas([...tareas, newTask])

    setNombre("")
    setCategoria("")
    setPrioridad("")
    setFecha("")
    setDescripcion("")
  }

  const { msg } = alerta

  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Aca puede añadir sus {""}
        <span className="block text-[#7c44f3] bg-gradient-to-r from-violet-300 to-violet-600 text-transparent bg-clip-text">
          {" "}
          tareas para administrarlas
        </span>
      </h1>

      {msg && <Error alerta={alerta} />}

      <div className="bg-[#393c71] w-[70rem] mt-20 rounded-xl mx-auto shadow-xl mb-32">
        <form className="p-10" onSubmit={handleFormTask}>
          <div className="flex-col items-center mt-[48px]">
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Nombre de la tarea:
            </label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              placeholder="Titulo de la tarea"
              className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
            />
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Categoria:
            </label>

            <select
              className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}>
              <option value="">-Seleccione</option>
              <option value="Borrador">Borrrador</option>
              <option value="Pendiente">Pendiente</option>
              <option value="En Proceso">En proceso</option>
              <option value="Hecho">Hecho</option>
            </select>

            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Prioridad:
            </label>

            <select
              className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}>
              <option value="">Seleccione</option>
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>

            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Fecha:
            </label>
            <input
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              type="date"
              className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner "
            />
          </div>

          <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
            descripcion:
          </label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="descripcion"
            placeholder="Puede colocar alguna descripcion"
            className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
          />

          <button
            type="submit"
            className="bg-[#1a2040] p-4 rounded-xl w-full mt-20 uppercase shadow-xl hover:transition-colors text-gray-500">
            Añadir Tarea
          </button>
        </form>
      </div>
    </>
  )
}

export default NewTaskForm
