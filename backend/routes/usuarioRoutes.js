import express from "express"
import {
  registro,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevaContraseña,
} from "../controllers/usuarioControllers.js"
const router = express.Router()

router.post("/", registro)
router.post("/login", autenticar)
router.get("/confirmar/:token", confirmar)
router.post("/olvide-password", olvidePassword)
router
  .route("/olvide-password/:token")
  .get(comprobarToken)
  .post(nuevaContraseña)

export default router
