import TaskContext from "../context/taskProvider"
import { useContext } from "react"

const useTask = () => {
  return useContext(TaskContext)
}
export default useTask
