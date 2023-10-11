"use client"

import useTask from "../hook/useTask"
import { useEffect } from "react"
const Tareas = () => {
  const { tareas, getTask } = useTask()
  useEffect(() => {
    getTask()
  }, [])

  return <div className="bg-[#393c71]"></div>
}

export default Tareas
