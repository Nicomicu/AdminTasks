import ToDoCard from "./ToDoCard"

const TaskList = ({ columnId, tareas }) => {
  return (
    <>
      {tareas
        .filter((tarea) => tarea && tarea.columns === columnId)
        .map((tarea) => (
          <ToDoCard key={tarea._id} tarea={tarea} />
        ))}
    </>
  )
}

export default TaskList
