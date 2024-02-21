"use client"

import { IoAddCircle } from "react-icons/io5"
import ModalComponent from "./ModalComponent"
import useTask from "../hook/useTask"

const ButtonAdd = () => {
  const { setIsOpen } = useTask()

  const handleClickOpen = () => {
    setIsOpen(true)
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
