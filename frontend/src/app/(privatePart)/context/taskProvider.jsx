"use client"
import axios from "axios"
import { useState, createContext } from "react"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tareas, setTareas] = useState({})
  const [alerta, setAlerta] = useState(false)

  const submitTask = async (tareas) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/tareas/newtask",
        tareas
      )
      setTareas(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getTask = async (id) => {
    try {
      const { data } = await axios(`http://localhost:4000/api/tareas/${id}`)
      console.log(data)
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
