import Image from "next/image"
import CloseSesion from "./CloseSesion"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <Image
          src="/calendario.png"
          alt="Descripción de la imagen"
          width={70}
          height={50}
          className="mt-2 mx-5"
        />
        <div>
          <CloseSesion />
        </div>
      </div>
    </div>
  )
}

export default Header
