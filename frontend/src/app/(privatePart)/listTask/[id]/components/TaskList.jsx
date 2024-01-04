"use client"
import useTask from "../../../hook/useTask"
import ToDoCard from "./ToDoCard"
const TaskList = ({ columnId }) => {
  const { tareas } = useTask()

  return (
    <>
      {tareas
        ?.filter((tarea) => tarea && tarea.columns === columnId)
        .map((tarea) => (
          <ToDoCard key={tarea._id} tarea={tarea} />
        ))}
    </>
  )
}

export default TaskList
