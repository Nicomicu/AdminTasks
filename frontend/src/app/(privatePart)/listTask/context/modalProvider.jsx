"use client"
import { useState, createContext } from "react"

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider }
export default ModalContext
