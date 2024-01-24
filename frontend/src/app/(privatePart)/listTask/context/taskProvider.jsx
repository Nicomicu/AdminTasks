"use client"
import React, { useState, createContext, useEffect } from "react"
import getTaskRequest from "../../../services/getTaskRequest"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  const [alerta, setAlerta] = useState(false)
  const [tarea, setTarea] = useState({})
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(!isOpen)
    setTarea({})
  }

  useEffect(() => {
    const keepTasks = async () => {
      try {
        const data = await getTaskRequest(tareas)
        setTareas(data)
      } catch (error) {
        console.log(error)
      }
    }
    keepTasks()
  }, [tareas])

  // const refresh = async () => {
  //   try {
  //     const data = await getTaskRequest(id)
  //     setTareas(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const cerrarSesion = () => {
    setTarea([])
    setAlerta(false)
  }

  return (
    <TaskContext.Provider
      value={{
        tareas,
        setTarea,
        tarea,
        alerta,
        setTareas,
        cerrarSesion,
        handleClose,
        isOpen,
        setIsOpen,
        setIsMenuOpen,
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider }
export default TaskContext
