import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ["Creado", "En progreso", "Finalizado"], default: "Creado" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" }
}, { timestamps: true });

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
