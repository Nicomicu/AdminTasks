"use client"

import React, { Fragment, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import { GoKebabHorizontal } from "react-icons/go"
import MenuDelete from "./MenuDelete"
import { useParams } from "next/navigation"
import editRequest from "../services/editRequest"
import useTask from "../../../hook/useTask"
import useModal from "../../hook/useModal"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function MenuEdit({ id }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setIsOpen, isOpen } = useModal()
  const { tareas, tarea, setTarea, setTareas } = useTask()

  const handleModalEdit = async (tarea) => {
    setTarea(tarea)
    setIsOpen(true)
    await editarTarea(tarea._id)
  }

  const editarTarea = async (tarea) => {
    console.log(tarea._id)
    try {
      const data = await editRequest(tarea, id)

      const tareaActualizada = tareas.map((tareaState) =>
        tareaState._id === data._id ? data : tareaState
      )
      setTarea(tareaActualizada)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => {
            setIsMenuOpen(true)
          }}
          className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white/50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <GoKebabHorizontal
            className="-mr-1 h-5 w-5 text-black"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <>
                  <button
                    onClick={() => {
                      handleModalEdit(tarea)
                    }}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm w-full text-left"
                    )}>
                    Editar
                  </button>
                </>
              )}
            </Menu.Item>
          </div>
          <MenuDelete id={tarea._id} />
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
