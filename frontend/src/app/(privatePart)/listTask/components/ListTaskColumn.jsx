"use client"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import ButtonAdd from "./ButtonAdd"
import ToDoCard from "./ToDoCard"
import useTask from "../../hook/useTask"
import Header from "./Header"

const columns = ["Pendiente", "En proceso", "Hecho"]

const ListTaskColumnPage = () => {
  const { tareas, setTareas } = useTask()

  const handleDragEnd = () => {}

  return (
    <>
      <Header />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="flex flex-col">
          <div className="mt-44 mx-auto w-[100rem] text-gray-600 font-bold text-2xl px-10 rounded-lg flex-nowrap">
            <div className="flex justify-between">
              {columns.map((columnId) => (
                <div
                  key={columnId}
                  className="w-[30%] bg-white/50 p-3 rounded-lg shadow-lg">
                  <h2>{columnId}</h2>
                  <SortableContext
                    items={tareas}
                    strategy={verticalListSortingStrategy}>
                    {tareas
                      .filter((tarea) => tarea && tarea.categoria === columnId)
                      .map((tarea) => (
                        <ToDoCard key={tarea._id} tarea={tarea} />
                      ))}
                  </SortableContext>
                  <ButtonAdd />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DndContext>
    </>
  )
}
export default ListTaskColumnPage
