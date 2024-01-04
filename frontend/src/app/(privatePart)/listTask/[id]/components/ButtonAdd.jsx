"use client"

import useModal from "../../hook/useModal"
import { IoAddCircle } from "react-icons/io5"
import ModalComponent from "./ModalComponent"
import useTask from "../../../hook/useTask"

const ButtonAdd = () => {
  const { setTareas } = useTask()
  const { isOpen, setIsOpen } = useModal()

  const handleClickOpen = () => {
    setIsOpen(true)
    setTareas([])
  }

  return (
    <div className="flex items-end justify-end p-1">
      <button
        onClick={handleClickOpen}
        className="text-[#3e7ee8] hover:text-green-red-600">
        <IoAddCircle className="h-10 w-10 " />
      </button>
      <ModalComponent />
    </div>
  )
}

export default ButtonAdd
