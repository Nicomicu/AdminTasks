import express from "express"
import {
  newtask,
  editask,
  deletetask,
} from "../controllers/tareasControllers.js"

const router = express.Router()

router.post("/newtask", newtask)
router.route("/editask/:id").put(editask).delete(deletetask)

export default router
