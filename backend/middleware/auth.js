import Jwt from "jsonwebtoken"
import Usuario from "../models/Usuario.js"
const auth = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]

      const decoded = Jwt.verify(token, process.env.SECRET)

      req.usuario = await Usuario.findById(decoded.id).select(
        "-password -confirmar -token -createdAt -updatedAt -__v"
      )

      return next()
    } catch (error) {
      return res.status(404).json({ msg: "hubo un error" })
    }
  }
  if (!token) {
    const error = new Error("El token no es valido")
    return res.status(401).json({ msg: error.message })
  }
}
export default auth
