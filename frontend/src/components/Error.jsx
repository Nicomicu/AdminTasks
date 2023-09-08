const Error = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error
          ? "from-red-400 to-red-600"
          : "from-emerald-600 bg-emerald-700"
      } bg-gradient-to-br text-center p-3 rounded-xl text-white w-[30rem] 
      flex justify-center uppercase font-bold  mx-auto mt-10 text-sm`}>
      {alerta.msg}
    </div>
  )
}

export default Error
