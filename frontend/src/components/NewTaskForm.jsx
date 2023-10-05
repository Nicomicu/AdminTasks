"use client"
import { useState } from "react"
import { toast } from "react-toastify"
import Error from "@/components/Error"
import ListboxPriority from "@/app/(privatePart)/newtask/components/ListboxPriority"
import ListboxCategory from "@/app/(privatePart)/newtask/components/ListboxCategory"
import { formateoFecha } from "@/app/helpers/FormateoFecha"

const NewTaskForm = ({ selectedCategoria, selectedPriority }) => {
  const [nameTask, setNameTask] = useState("")
  const [date, setDate] = useState(new Date())
  const [description, setDescription] = useState("")

  const handleFormTask = (e) => {
    e.preventDefault()
    if ([nameTask, selectedCategoria, selectedPriority].includes("")) {
      toast.error("Por favor rellene los campos", {
        background: "#393c71",
        theme: "dark",
      })
      return
    }
    try {
    } catch (error) {
      console.log(error)
    }
  }
  // const { msg } = alerta
  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Aca puede añadir sus {""}
        <span className="block text-[#7c44f3] bg-gradient-to-r from-violet-300 to-violet-600 text-transparent bg-clip-text">
          {" "}
          tareas para administrarlas
        </span>
      </h1>

      {/* {msg && <Error alerta={alerta} />} */}

      <div className="bg-[#393c71] w-[70rem] mt-20 rounded-xl mx-auto shadow-xl mb-32">
        <form className="p-10" onSubmit={handleFormTask}>
          <div className="flex-col items-center mt-[48px]">
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Nombre de la tarea:
            </label>
            <input
              value={nameTask}
              onChange={(e) => setNameTask(e.target.value)}
              type="text"
              placeholder="Titulo de la tarea"
              className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
            />
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Categoria:
            </label>
            <ListboxCategory selectedCategoria={selectedCategoria} />

            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Prioridad:
            </label>
            <ListboxPriority />

            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Fecha:
            </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner "
            />
          </div>

          <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
            descripcion:
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="descripcion"
            placeholder="Puede colocar alguna descripcion"
            className=" outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
          />

          <button
            // onClick={}
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
