import jwt from "jsonwebtoken"

const generarJwt = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "30d",
  })
}

export default generarJwt
