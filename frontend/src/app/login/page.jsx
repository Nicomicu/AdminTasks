import Link from "next/link"

const Login = () => {
  return (
    <>
      <h1 className="text-6xl font-bold mt-20">
        Bienvenido a AdminTask
        {""}
        <span className="block text-[#7c44f3]">Un administrador de tareas</span>
      </h1>

      <div className="bg-[#393c71] w-[40rem] h-[30rem] mt-20 rounded-xl mx-auto shadow-xl">
        <form className="p-10">
          <div className="flex-col items-center mt-[3rem]">
            <label className="flex justify-start text-xl text-gray-400 p-1">
              Nombre:
            </label>
            <input
              type="text"
              placeholder="Ingrese su Nombre"
              className=" outline-none bg-[#1a2040] p-4 rounded-lg text-gray-500 w-full shadow-inner"
            />
            <label className="flex justify-start text-xl text-gray-400 mt-5 p-1">
              Password:
            </label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className=" outline-none bg-[#1a2040] w-full p-4 rounded-lg text-gray-500 shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1a2040] p-4 rounded-xl w-full mt-20 uppercase shadow-xl hover:transition-colors">
            Iniciar sesion
          </button>
        </form>

        <nav className="lg:flex lg:justify-between mt-5">
          <Link
            href="/registro"
            className="block text-center my-3 text-slate-500 uppercase text-sm">
            Registrate si no tienes una cuenta
          </Link>
          <div className="top-28">
            <Link
              href="/olvidastePassword"
              className="block text-center my-3 text-slate-500 uppercase text-sm">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Login
