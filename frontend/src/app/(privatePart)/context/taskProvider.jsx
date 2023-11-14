"use client"
import { useState, useEffect, createContext } from "react"
import getTaskRequest from "../services/getTaskRequest"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  const [alerta, setAlerta] = useState(false)

  useEffect(() => {
    const keepTasks = async () => {
      try {
        const data = await getTaskRequest()
        setTareas(data)
      } catch (error) {
        console.log(error)
      }
    }

    keepTasks()
  }, [])

  const cerrarSesion = () => {
    setTareas([])
    setAlerta(false)
  }

  return (
    <TaskContext.Provider value={{ tareas, alerta, setTareas, cerrarSesion }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider }
export default TaskContext
