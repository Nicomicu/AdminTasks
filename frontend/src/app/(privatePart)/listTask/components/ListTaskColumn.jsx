"use client"

import ButtonAdd from "./ButtonAdd"
import ToDoCard from "./ToDoCard"
import useTask from "../../hook/useTask"
import Header from "./Header"

const columns = ["Pendiente", "En proceso", "Hecho"]

const ListTaskColumnPage = () => {
  const { tareas, setTareas } = useTask()

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="mt-44 mx-auto w-[100rem] text-gray-600 font-bold text-2xl px-10 rounded-lg flex-nowrap">
          <div className="flex justify-between">
            {columns.map((columnId) => (
              <div
                key={columnId}
                className="w-[30%] bg-white/50 p-3 rounded-lg shadow-lg">
                <h2>{columnId}</h2>
                {tareas
                  .filter((tarea) => tarea && tarea.categoria === columnId)
                  .map((tarea) => (
                    <ToDoCard key={tarea._id} tarea={tarea} />
                  ))}
                <ButtonAdd />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default ListTaskColumnPage
