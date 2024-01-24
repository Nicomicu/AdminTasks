"use client"
import useTask from "../hook/useTask"
import Header from "./Header"
import ColumnId from "./ColumnId"

const columns = ["Pendiente", "En proceso", "Hecho"]

const ListTaskColumnPage = () => {
  const { tareas } = useTask()

  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col">
          <div className="mt-44 mx-auto w-[100rem] text-gray-600 font-bold text-2xl px-10 rounded-lg flex-nowrap">
            <div className="flex justify-between">
              {columns.map((columnId) => (
                <ColumnId
                  key={columnId}
                  columnId={columnId}
                  tareas={tareas}
                  columns={columns}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListTaskColumnPage
