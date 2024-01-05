"use client"
import React, { useState, useEffect, createContext } from "react"
import getTaskRequest from "../services/getTaskRequest"
import { useParams } from "next/navigation"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  const [alerta, setAlerta] = useState(false)
  const [tarea, setTarea] = useState([])

  const params = useParams()
  const { id } = params

  useEffect(() => {
    const keepTasks = async () => {
      try {
        const data = await getTaskRequest(id)
        setTareas(data)
      } catch (error) {
        console.log(error)
      }
    }

    keepTasks()
  }, [])
  const refresh = async () => {
    try {
      const data = await getTaskRequest(id)
      setTareas(data)
    } catch (error) {
      console.log(error)
    }
  }

  // const submitTask = async (tarea) => {
  //   console.log(tarea)
  //   if (tarea.id) {
  //     await editarTarea(tarea)
  //   } else {
  //     await newTask(tarea)
  //   }
  //   return
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
        refresh,
        // id,
        // setId,
        // nombre,
        // setNombre,
        // columns,
        // setColumns,
        // descripcion,
        // setDescripcion,
        // fecha,
        // setFecha,
      }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider }
export default TaskContext
