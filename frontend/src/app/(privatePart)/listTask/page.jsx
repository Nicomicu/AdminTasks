import Tareas from "../components/Tareas"
import useTask from "../hook/useTask"

const TaskManagementpage = () => {
  return (
    <>
      {/* {tareas && tareas.length > 0 ? ( */}
      <>
        <h1 className="text-6xl flex mx-[20rem] font-bold mt-5 text-white">
          <span className="text-[#7c44f3]">Administración</span>&nbsp;de tareas
        </h1>
        <div className="mt-24 grid grid-cols-4 w-full text-[#483e66] font-bold text-2xl">
          <div>
            <h2>Borrador</h2>
          </div>
          <div>
            <h2>Pendiente</h2>
          </div>
          <div>
            <h2>En Proceso</h2>
          </div>
          <div>
            <h2>Hecho</h2>
          </div>
        </div>
      </>
      ) : (
      <p className="text-5xl text-gray-400 text-center font-bold">
        No hay tareas aún
      </p>
      {/* )}
      {tareas &&
        tareas?.map((tarea) => {
          return <Tareas tarea={tarea} key={tarea.id} />
        })} */}
    </>
  )
}

export default TaskManagementpage
