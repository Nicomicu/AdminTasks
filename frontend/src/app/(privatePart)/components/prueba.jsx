// const ColumnsComponent = ({ tarea }) => {
//   const { tareas } = useTask()

//   return (
//     <DragDropContext onDragEnd={(result) => console.log(result)}>
//       <div className="mt-24 grid grid-cols-4 w-full text-[#483e66] font-bold text-2xl">
//         <Droppable droppableId="borrador">
//           {(provided) => (
//             <div ref={provided.innerRef} {...provided.droppableProps}>
//               <h2>Borrador</h2>
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//         <Droppable droppableId="Pendiente">
//           {(provided) => (
//             <div ref={provided.innerRef} {...provided.droppableProps}>
//               <h2>Pendiente</h2>
//               {tareas.map((tarea, index) => (
//                 <Draggable
//                   key={tarea._id}
//                   draggableId={tarea._id}
//                   index={index}>
//                   {(draggableProvided) => (
//                     <Tarea
//                       tarea={tarea}
//                       draggableProvided={draggableProvided}
//                     />
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//         <Droppable droppableId="En proceso">
//           {(provided) => (
//             <div ref={provided.innerRef} {...provided.droppableProps}>
//               <h2>En proceso</h2>
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//         <Droppable droppableId="Hecho">
//           {(provided) => (
//             <div ref={provided.innerRef} {...provided.droppableProps}>
//               <h2>Hecho</h2>
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//     </DragDropContext>
//   )
// }

// export default ColumnsComponent

// "use client"
// import Tarea from "../components/Tarea"
// import useTask from "../hook/useTask"

// const SeeTasksPage = () => {
//   const { tareas } = useTask()

//   return (
//     <div>
//       {tareas && tareas.length > 0 ? (
//         <>
//           <h1 className="text-6xl flex mx-[20rem] font-bold mt-5 text-white">
//             <span className="text-[#7c44f3]">Administración</span>&nbsp;de
//             tareas
//           </h1>
//           {tareas.map((tarea) => (
//             <Tarea key={tarea._id} tarea={tarea} />
//           ))}
//         </>
//       ) : (
//         <p className="text-5xl text-gray-600 text-center font-bold mt-32 uppercase">
//           No hay tareas aún
//         </p>
//       )}
//     </div>
//   )
// }

// style={style}
//   ref={setNodeRef}
//   {...attributes}
//   {...listeners}
//   className="mt-10 ml-60">
//   <div className="bg-[#393c71] p-5 w-[25rem] h-[30rem] rounded-lg shadow-md mt-5">
//     <div className="mt-2 flex items-center justify-between">
//       <p className="bg-red-400 text-red-700 rounded-md w-20">{prioridad}</p>

//       <div>
//         <button className="hover:bg-[#454547] p-3 rounded-md">
//           <GoKebabHorizontal className="text-gray-400" />
//         </button>
//       </div>
//     </div>

//     <h2 className="flex items-center mt-2 rounded-md text-gray-500 uppercase font-bold p-2 text-lg hover:border-b w-1/2 border-gray-400">
//       <RiFile4Fill className="mr-2" /> {nombre}
//     </h2>

//     <div className="mt-10">
//       <p className="bg-[#1a2040] p-10 rounded-md flex justify-start">
//         {descripcion}
//       </p>
//     </div>

//     <p className="text-start mt-2 text-gray-300">{formateoFecha(fecha)}</p>
//   </div>

// export default SeeTasksPage

{
  /* <Transition.Root show={modalFormulario} as={Fragment}>
<Dialog
  as="form"
  className="fixed inset-0 z-10 overflow-y-auto"
  onClose={handleModal}>
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0">
    <div className="fixed inset-0 bg-black bg-opacity-10"></div>
  </Transition.Child>
  <div className="flex items-center justify-center min-h-full">
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-20 transition-opacity">
        <div className="max-w-md w-full p-6 bg-white rounded-2xl text-left shadow-xl">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 pb-2">
            Crea una nueva tarea
          </Dialog.Title>
          <FormModal />
        </div>
      </Dialog.Panel>
    </Transition.Child>
  </div>
</Dialog>
</Transition.Root>
)
} */
}

// "use client"
// import { useState } from "react"
// import { toast } from "react-toastify"
// import Error from "@/components/Error"
// import useTask from "../../hook/useTask"
// import newTaskRequest from "../services/newTaskRequest"

// const NewTaskForm = () => {
//   const [nombre, setNombre] = useState("")
//   const [categoria, setCategoria] = useState("")
//   const [prioridad, setPrioridad] = useState("")
//   const [fecha, setFecha] = useState(new Date())
//   const [descripcion, setDescripcion] = useState("")

//   const { tareas, alerta, setTareas } = useTask()

//   const handleFormTask = async (e) => {
//     e.preventDefault()
//     if ([nombre, categoria, prioridad, descripcion].includes("")) {
//       toast.error("Por favor rellene los campos", {
//         background: "#393c71",
//         theme: "dark",
//       })

//       return
//     }

//     const newTask = await newTaskRequest({
//       nombre,
//       categoria,
//       prioridad,
//       fecha,
//       descripcion,
//     })

//     setTareas([...tareas, newTask])

//     setNombre("")
//     setCategoria("")
//     setPrioridad("")
//     setFecha("")
//     setDescripcion("")
//   }

//   const { msg } = alerta

//   return (
//     <>
//       <h1 className="text-6xl font-bold mt-20">
//         Aca puede añadir sus {""}
//         <span className="block text-[#7c44f3] bg-gradient-to-r from-violet-300 to-violet-600 text-transparent bg-clip-text">
//           {" "}
//           tareas para administrarlas
//         </span>
//       </h1>

//       {msg && <Error alerta={alerta} />}

//       <div className="bg-[#393c71] w-[40rem] mt-20 rounded-xl mx-auto shadow-xl mb-32">
//         <form className="p-10" onSubmit={handleFormTask}>
//           <div className="flex-col items-center mt-[48px]">
//             <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
//               Nombre de la tarea:
//             </label>
//             <input
//               value={nombre}
//               onChange={(e) => setNombre(e.target.value)}
//               type="text"
//               placeholder="Titulo de la tarea"
//               className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
//             />
//             <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
//               Categoria:
//             </label>

//             <select
//               className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
//               value={categoria}
//               onChange={(e) => setCategoria(e.target.value)}>
//               <option value="">-Seleccione</option>
//               <option value="Borrador">Borrrador</option>
//               <option value="Pendiente">Pendiente</option>
//               <option value="En Proceso">En proceso</option>
//               <option value="Hecho">Hecho</option>
//             </select>

//             <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
//               Prioridad:
//             </label>

//             <select
//               className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
//               value={prioridad}
//               onChange={(e) => setPrioridad(e.target.value)}>
//               <option value="">Seleccione</option>
//               <option value="Baja">Baja</option>
//               <option value="Media">Media</option>
//               <option value="Alta">Alta</option>
//             </select>

//             <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
//               Fecha:
//             </label>
//             <input
//               value={fecha}
//               onChange={(e) => setFecha(e.target.value)}
//               type="date"
//               className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner "
//             />
//           </div>

//           <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
//             descripcion:
//           </label>
//           <input
//             value={descripcion}
//             onChange={(e) => setDescripcion(e.target.value)}
//             type="descripcion"
//             placeholder="Puede colocar alguna descripcion"
//             className="outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
//           />

//           <button
//             type="submit"
//             className="bg-[#1a2040] p-4 rounded-xl w-full mt-20 uppercase shadow-xl hover:transition-colors hover:bg-[#1a2038] text-gray-500">
//             Añadir Tarea
//           </button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default NewTaskForm
