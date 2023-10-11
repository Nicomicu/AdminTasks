import express from "express"
import {
  newtask,
  gettask,
  editask,
  deletetask,
} from "../controllers/tareasControllers.js"

const router = express.Router()

router.post("/newtask", newtask)
router.route("/:id").get(gettask).put(editask).delete(deletetask)

export default router
