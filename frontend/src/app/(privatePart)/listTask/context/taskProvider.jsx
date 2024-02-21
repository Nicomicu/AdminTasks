"use client"

import React, { useState, createContext, useEffect } from "react"
import getTaskRequest from "../services/getTaskRequest"
import editRequest from "../services/editRequest"
import newTaskRequest from "../services/newTaskRequest"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  const [alerta, setAlerta] = useState(false)
  const [tarea, setTarea] = useState({})
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  // const [modalEliminar, setModalEliminar] = useState(false)

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

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

  const submitTarea = async (tarea) => {
    if (tarea.id) {
      await editTask(tarea)
    } else {
      await addTask(tarea)
    }
  }

  const addTask = async (tarea) => {
    try {
      const { data } = await newTaskRequest(tarea)
      setTareas([...tareas, data])
      setTarea({})
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
      setTarea({})
    } catch (error) {
      console.log(error)
    }
  }

  const handleActualizar = (tarea) => {
    setTarea(tarea)
    setIsOpen(true)
  }

  // const handleModalEliminarTarea = (tarea) => {
  //   setTarea(tarea)
  //   setModalEliminar(true)
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
        submitTarea,
        handleActualizar,
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider }
export default TaskContext
