"use client"

import React, { useState, createContext, useEffect } from "react"
import getTaskRequest from "../services/getTaskRequest"
import newTaskRequest from "../services/newTaskRequest"
import editRequest from "../services/editRequest"
import axios from "axios"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  const [alerta, setAlerta] = useState(false)
  const [tarea, setTarea] = useState({})
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(!isOpen)
    if (tarea?._id) {
      setTarea({})
    }
  }

  const submitTarea = async (tarea) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) {
        throw new Error("Token not available")
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }

      const { data } = await axios.post(
        "http://localhost:4000/api/tareas",
        tarea,
        config
      )

      console.log(data)
      // return data
    } catch (error) {
      console.log(error)
    }
    // if (tarea?.id) {
    //   await editTask(tarea)
    // } else {
    //   await addTask(tarea)
    // }
  }

  // const addTask = async (tarea) => {
  //   try {
  //     const token = localStorage.getItem("token")
  //     if (!token) {
  //       throw new Error("Token not available")
  //     }

  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }

  //     const { data } = await axios.post(
  //       "http://localhost:4000/api/tareas",
  //       tarea,
  //       config
  //     )

  //     console.log(data)
  //     // return data
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
