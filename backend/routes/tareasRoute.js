import express from "express"
import {
  newtask,
  gettask,
  updateTask,
  deletetask,
  getAltTask,
} from "../controllers/tareasControllers.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.route("/").get(auth, getAltTask).post(auth, newtask)
router.route("/:id").get(gettask).put(updateTask).delete(deletetask)

export default router
