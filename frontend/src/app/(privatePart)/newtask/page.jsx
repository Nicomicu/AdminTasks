const NewTaskPage = () => {
  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Aca puede añadir sus {""}
        <span className="block text-[#7c44f3] bg-gradient-to-r from-violet-300 to-violet-600 text-transparent bg-clip-text   ">
          {" "}
          tareas para administrarlas
        </span>
      </h1>

      {/* {msg && <Error alerta={alerta} />} */}

      <div className="bg-[#393c71] w-[70rem] mt-20 rounded-xl mx-auto shadow-xl mb-32">
        <form className="p-10">
          <div className="flex-col items-center mt-[48px] ">
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Nombre de la tarea:
            </label>
            <input
              type="text"
              placeholder="Ingrese su Nombre"
              className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
            />
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Categoria:
            </label>
            <input
              type="email"
              placeholder="Ingrese su corrreo"
              className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
            />
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Prioridad:
            </label>

            <select className="outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner focus:bg-[#1a2040] focus:outline-none">
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>

            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Fecha:
            </label>
            <input
              type="date"
              placeholder="Ingrese nuevamente su password"
              className=" outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
            />
          </div>

          <button
            // onClick={}
            type="submit"
            className="bg-[#1a2040] p-4 rounded-xl w-full mt-20 uppercase shadow-xl hover:transition-colors text-gray-500">
            Añadir Tarea
          </button>
        </form>
      </div>
    </>
  )
}

export default NewTaskPage
