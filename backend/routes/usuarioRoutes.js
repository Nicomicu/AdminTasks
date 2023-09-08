import express from "express"
import {
  registro,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevaContraseña,
  perfil,
} from "../controllers/usuarioControllers.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.post("/", registro)
router.post("/login", autenticar)
router.get("/confirmar/:token", confirmar)
router.post("/olvide-password", olvidePassword)
router
  .route("/olvide-password/:token")
  .get(comprobarToken)
  .post(nuevaContraseña)

router.get("/perfil", auth, perfil)

export default router
