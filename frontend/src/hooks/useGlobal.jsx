import GlobalContext from "@/context/GlobalContext"
import { useContext } from "react"

useGlobal = () => {
  return useContext(GlobalContext)
}
export default useGlobal
