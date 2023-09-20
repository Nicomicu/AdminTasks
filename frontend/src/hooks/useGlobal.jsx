import GlobalContext from "@/context/GlobalProvider"
import { useContext } from "react"

const useGlobal = () => {
  return useContext(GlobalContext)
}
export default useGlobal
