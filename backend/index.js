import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import tareasRoutes from "./routes/tareasRoute.js"
import connectDatabase from "./config/db.js"

const app = express()
app.use(express.json())
dotenv.config()
connectDatabase()

app.use("/api/usuario", usuarioRoutes)
app.use("/api/tareas", tareasRoutes)

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
  console.log(`${PORT}`)
})
