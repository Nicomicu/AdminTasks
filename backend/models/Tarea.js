import mongoose from "mongoose"

const tareaSchema = mongoose.Schema(
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
const Tarea = mongoose.model("Tarea", tareaSchema)
export default Tarea
