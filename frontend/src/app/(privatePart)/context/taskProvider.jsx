"use client"
import axios from "axios"
import { useState, createContext } from "react"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  const [alerta, setAlerta] = useState(false)

  console.log(tareas)
  const getTask = async (id) => {
    try {
      const { data } = await axios(`http://localhost:4000/api/tareas/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  // const guardarTarea = () => {
  //   nuevaTarea.id = tareas.id
  //   setTareas([...tareas, nuevaTarea])
  // }
  const submitTask = async (tarea) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/tareas/newtask",
        tarea
      )

      setTareas([...tareas, data])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider value={{ tareas, alerta, getTask, submitTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider }
export default TaskContext
