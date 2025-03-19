import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  checkIn: { type: String, required: true },
  checkOut: { type: String }
}, { timestamps: true });

export default mongoose.models.Attendance || mongoose.model("Attendance", AttendanceSchema);
