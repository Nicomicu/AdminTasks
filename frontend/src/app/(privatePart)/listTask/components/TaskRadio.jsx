"use client"
import { RadioGroup } from "@headlessui/react"
import { GoCheckCircleFill } from "react-icons/go"

const Categorias = [
  {
    id: "Pendiente",
    name: "Pendiente",
    description: "Tarea que no ha sido abordada",
  },
  {
    id: "En proceso",
    name: "En proceso",
    description: "La tarea ha sido iniciada y se encuentra en curso",
  },
  {
    id: "Hecho",
    name: "Hecho",
    description: "Tarea que ha sido completada",
  },
]

const TaskRadio = ({ categoria, setCategoria }) => {
  return (
    <RadioGroup value={categoria} onChange={(e) => setCategoria(e)}>
      <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>

      <div className="mt-5">
        {Categorias.map((categoriaItem) => (
          <div key={categoriaItem.id} className="mt-2">
            <RadioGroup.Option value={categoriaItem.id}>
              {({ checked }) => (
                <div
                  className={`relative flex border rounded-lg shadow-lg p-4 ${
                    checked ? "bg-[#3e7ee8] transition-colors text-white" : ""
                  }`}>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className={`block text-xl font-medium text-gray-600 ${
                          checked ? "text-white text-2xl" : ""
                        }`}>
                        {categoriaItem.name}
                      </RadioGroup.Label>

                      <RadioGroup.Description
                        as="span"
                        className={`block text-sm mt-1 text-gray-600 ${
                          checked ? " text-white" : ""
                        }`}>
                        {categoriaItem.description}
                      </RadioGroup.Description>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <GoCheckCircleFill className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}

export default TaskRadio
