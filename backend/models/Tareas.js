import mongoose from "mongoose"

const TareasSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    columns: {
      type: String,
      required: true,
      trim: true,
      enum: ["Pendiente", "En proceso", "Hecho"],
    },
    // prioridades: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   enum: ["Baja", "Media", "Alta"],
    // },
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
