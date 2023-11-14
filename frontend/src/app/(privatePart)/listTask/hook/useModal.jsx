import ModalContext from "../context/modalProvider"
import { useContext } from "react"

const useModal = () => {
  return useContext(ModalContext)
}
export default useModal
