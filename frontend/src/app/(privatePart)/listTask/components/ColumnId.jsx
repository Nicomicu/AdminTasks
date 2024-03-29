import TaskList from "./TaskList"
import ButtonAdd from "./ButtonAdd"

const ColumnId = ({ columnId, tarea }) => {
  return (
    <div className="w-[30%] bg-white/50 p-3 rounded-lg shadow-lg">
      <h2>{columnId}</h2>
      <TaskList columnId={columnId} tarea={tarea} />
      <ButtonAdd />
    </div>
  )
}

export default ColumnId
