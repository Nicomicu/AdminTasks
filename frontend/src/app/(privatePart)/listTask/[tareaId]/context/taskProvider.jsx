"use client"

import React, { useState, createContext, useEffect } from "react"
import getTaskRequest from "../services/getTaskRequest"
import newTaskRequest from "../services/newTaskRequest"
import editRequest from "../services/editRequest"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  const [alerta, setAlerta] = useState(false)
  const [tarea, setTarea] = useState({})
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(!isOpen)
    // setTarea({})
  }
  const submitTarea = async (tarea) => {
    if (tarea?.id) {
      await editTask(tarea)
    } else {
      await addTask(tarea)
    }
  }

  const addTask = async () => {
    try {
      const { data } = await newTaskRequest(tarea)
      setTareas([...tareas, data])
    } catch (error) {
      console.log(error)
    }
  }

  const editTask = async (tarea) => {
    try {
      const { data } = await editRequest(tarea)

      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState._id === data._id ? data : tareaState
      )
      setTareas(tareasActualizadas)
      setIsOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const keepTasks = async () => {
      try {
        const data = await getTaskRequest(tareas)
        setTareas(data)
      } catch (error) {
        console.error(error)
      }
    }
    keepTasks()
  }, [tareas])

  const cerrarSesion = () => {
    setTareas([])
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
        submitTarea,
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider }
export default TaskContext
