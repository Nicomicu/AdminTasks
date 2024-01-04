import express from "express"
import {
  newtask,
  gettask,
  editask,
  deletetask,
} from "../controllers/tareasControllers.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.route("/").get(auth, gettask).post(auth, newtask)
router.route("/:id").get(gettask).put(editask).delete(deletetask)

export default router
