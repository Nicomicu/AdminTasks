import jwt from "jsonwebtoken"
import Usuario from "../models/Usuario.js"

const auth = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.SECRET)

      req.usuario = await Usuario.findById(decoded.id).select(
        "-password -confirmado -token -createdAt -updatedAt -__v"
      )

      return next()
    } catch (error) {
      return res.status(401).json({ msg: "Hubo un error" })
    }
  }

  if (!token) {
    const error = new Error("No es Valido")
    return res.status(401).json({ msg: error.message })
  }
  next()
}

export default auth
