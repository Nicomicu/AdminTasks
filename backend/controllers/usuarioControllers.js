import Usuario from "../models/Usuario.js"
import generarId from "../helpers/generarId.js"
import generarJwt from "../helpers/generarJWT.js"
import { emailRegistro } from "../helpers/email.js"

const registro = async (req, res) => {
  const { email } = req.body
  const emailExistente = await Usuario.findOne({ email })
  if (emailExistente) {
    const error = new Error("Este usuario ya esta registrado")
    return res.status(400).json({ msg: error.message })
  }
  try {
    const usuario = new Usuario(req.body)
    usuario.token = generarId()
    await usuario.save()

    emailRegistro({
      email: usuario.email,
      nombre: usuario.nombre,
      token: usuario.token,
    })
    res.json({ msg: "Usuario creado correctamente, verifique su correo" })
  } catch (error) {
    console.log(error)
  }
}

const autenticar = async (req, res) => {
  const { email, password } = req.body
  const usuario = await Usuario.findOne({ email })
  if (!usuario) {
    const error = new Error("Este usuario no existe")
    return res.status(404).json({ msg: error.message })
  }
  if (!usuario.confirmar) {
    const error = new Error("Tu cuenta no fue confirmada")
    return res.status(403).json({ msg: error.message })
  }
  if (await usuario.comprobarPassword(password)) {
    res.json({
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJwt(usuario._id),
    })
  } else {
    const error = new Error("Tu Contraseña es incorrecta")
    return res.status(403).json({ msg: error.message })
  }
}

const confirmar = async (req, res) => {
  const { token } = req.params
  const usuarioConfirm = await Usuario.findOne({ token })
  if (!usuarioConfirm) {
    const error = new Error("Cuenta no valida")
    return res.status(403).json({ msg: error.message })
  }
  try {
    usuarioConfirm.confirmar = true
    usuarioConfirm.token = ""
    await usuarioConfirm.save()
    res.json({ msg: "Usuario Confirmado Correctamente" })
  } catch (error) {
    console.log(error)
  }
}
const olvidePassword = async (req, res) => {
  const { email } = req.body

  const usuario = await Usuario.findOne({ email })
  if (!usuario) {
    const error = new Error("El usuario no existe")
    return res.status(404).json({ msg: error.message })
  }
  try {
    usuario.token = generarId()
    await usuario.save()
    res.json({ msg: "Te enviamos un correo para cambiar tu contraseña" })
  } catch (error) {
    console.log(error)
  }
}
const comprobarToken = async (req, res) => {
  const { token } = req.params
  const tokenValido = await Usuario.findOne({ token })
  if (tokenValido) {
    res.json({ msg: "Usuario Valido" })
  } else {
    const error = new Error("El usuario no es valido")
    return res.status(404).json({ msg: error.message })
  }
}

const nuevaContraseña = async (req, res) => {
  const { token } = req.params
  const { password } = req.body
  const usuario = await Usuario.findOne({ token })
  if (usuario) {
    usuario.password = password
    usuario.token = ""
    try {
      await usuario.save()
      res.json({ msg: "Se ha guardado tu nueva contraseña" })
    } catch (error) {
      console.log(error)
    }
  } else {
    const error = new Error("Ocurrio un error")
    return res.status(404).json({ msg: error.message })
  }
}
const perfil = (req, res) => {
  const { usuario } = req

  res.json(usuario)
}

export {
  registro,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevaContraseña,
  perfil,
}
