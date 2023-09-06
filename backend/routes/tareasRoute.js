import express from "express"
import {
  nuevaTarea,
  editarTarea,
  eliminarTarea,
} from "../controllers/tareasControllers.js"

const router = express.Router()

router.post("/nuevaTarea", nuevaTarea)
router.route("/editandoTarea/:id").put(editarTarea).delete(eliminarTarea)

export default router
