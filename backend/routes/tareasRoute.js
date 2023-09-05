import express from "express"
import { nuevaTarea, editarTarea } from "../controllers/tareasControllers.js"

const router = express.Router()

router.post("/nuevaTarea", nuevaTarea)
router.route("/editandoTarea/:id").put(editarTarea)

export default router
