import express from "express"
import {
  newTask,
  getTask,
  ediTask,
  deleteTask,
  getAltTask,
} from "../controllers/tareasControllers.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.route("/").get(auth, getAltTask).post(auth, newTask)
router.route("/:id").get(getTask).put(ediTask).delete(deleteTask)

export default router
