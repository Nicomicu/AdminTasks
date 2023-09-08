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

const whitelist = [process.env.FRONTEND_URL]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Error de cors"))
    }
    console.log(origin)
  },
}

app.use(cors(corsOptions))

app.use("/api/usuario", usuarioRoutes)
app.use("/api/tareas", tareasRoutes)

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
  console.log(`${PORT}`)
})
