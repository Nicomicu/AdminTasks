import Image from "next/image"
import CloseSesion from "./CloseSesion"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/calendario.png"
          alt="Descripción de la imagen"
          width={70}
          height={50}
          className="mt-2 mx-5"
        />
        <div>
          <p className="text-center font-extrabold uppercase text-3xl">
            Admin<span className="text-[#3e7ee8]">Task</span>
          </p>
        </div>
      </div>
      <div>
        <CloseSesion />
      </div>
    </div>
  )
}

export default Header
