"use client"
import { useState } from "react"
import Error from "@/components/Error"
import ListboxComponent from "./components/Listbox"

const categoria = ["Borrador", "Pendiente", "En Proceso", "Hecho"]

const NewTaskPage = () => {
  const [nameTask, setNameTask] = useState("")
  const [categoty, setCategory] = useState(categoria[0])
  // const [Date, setDate] = useState(new Date())
  const [description, setDescription] = useState("")

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
        <form className="p-10">
          <div className="flex-col items-center mt-[48px] ">
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Nombre de la tarea:
            </label>
            <input
              type="text"
              placeholder="Titulo de la tarea"
              className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
            />
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Categoria:
            </label>
            <input
              type="text"
              placeholder="ingrese una categoria"
              className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
            />
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Prioridad:
            </label>
            <ListboxComponent />
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Fecha:
            </label>
            <input
              type="date"
              className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner "
            />
          </div>

          <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
            deescripcion:
          </label>
          <input
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

export default NewTaskPage
