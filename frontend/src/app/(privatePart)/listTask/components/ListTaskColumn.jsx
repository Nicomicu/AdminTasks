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

      <div className="grid grid-cols-3 ml-[17rem]">
        <div className="mt-44 w-[100rem] flex justify-between text-gray-600 font-bold text-2xl px-10 rounded-lg ">
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
    </>
  )
}

export default ListTaskColumnPage
