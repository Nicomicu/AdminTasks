"use client"
import { useState, useEffect, createContext } from "react"
import getTaskRequest from "../services/getTaskRequest"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  const [alerta, setAlerta] = useState(false)

  // useEffect(() => {
  //   const getTask = async () => {
  //     try {
  //       if (id) {
  //         const { data } = await axios(`http://localhost:4000/api/tareas/${id}`)
  //         setTareas(data)
  //       } else {
  //         console.log("ID no definido")
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getTask()
  // }, [])

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
