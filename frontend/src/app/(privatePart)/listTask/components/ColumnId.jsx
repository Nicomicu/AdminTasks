import ButtonAdd from "./ButtonAdd"
import TaskList from "./TaskList"

const ColumnId = ({ columnId, tareas }) => {
  return (
    <div className="w-[30%] bg-white/50 p-3 rounded-lg shadow-lg">
      <h2>{columnId}</h2>
      <TaskList columnId={columnId} tareas={tareas} />
      <ButtonAdd />
    </div>
  )
}

export default ColumnId
