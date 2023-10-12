"use client"
import useTask from "../hook/useTask"
const Tareas = () => {
  const { tareas, alerta, setTareas } = useTask()
  console.log(tareas)
  return <div className="bg-red-500">hola</div>
}

export default Tareas
