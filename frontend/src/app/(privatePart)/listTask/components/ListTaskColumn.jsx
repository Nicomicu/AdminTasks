"use client"
import CloseSesion from "./CloseSesion"
import ButtonAdd from "./ButtonAdd"
import ToDoCard from "./ToDoCard"
import useTask from "../../hook/useTask"

const columns = ["Pendiente", "En proceso", "Hecho"]

const ListTaskColumnPage = ({ tarea }) => {
  const { tareas, setTareas } = useTask()

  return (
    <>
      {tareas && tareas.length > 0 ? (
        <div className="mt-44 grid grid-cols-3 gap-4 mx-auto w-[100rem] text-gray-600 font-bold text-2xl px-10">
          {columns.map((columnId) => (
            <div key={columnId} className="w-[30rem] bg-white/50 p-3">
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
      ) : (
        <p className="text-gray-600 text-4xl uppercase font-bold">
          No hay tareas aún
        </p>
      )}
      <CloseSesion />
    </>
  )
}
export default ListTaskColumnPage
