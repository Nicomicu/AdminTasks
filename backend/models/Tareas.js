import mongoose from "mongoose"

const TareasSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
      enum: ["Borrador", "Pendiente", "En proceso", "Hecho"],
    },
    prioridad: {
      type: String,
      required: true,
      trim: true,
      enum: ["Baja", "Media", "Alta"],
    },
    fecha: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)
const Tareas = mongoose.model("tareas", TareasSchema)
export default Tareas
