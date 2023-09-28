const TaskManagementpage = () => {
  return (
    <>
      <div>
        <h1 className="text-6xl flex mx-[20rem] font-bold mt-5 text-white">
          <span className="text-[#7c44f3]">Administración</span>&nbsp;de tareas
        </h1>
      </div>
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
  )
}

export default TaskManagementpage
