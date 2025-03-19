import dbConnect from "@/lib/mongodb";
import Attendance from "@/models/Attendance";

export async function GET() {
  await dbConnect();
  const attendance = await Attendance.find({}).populate("user");
  return Response.json(attendance);
}

export async function POST(req) {
  await dbConnect();
  const { user, checkIn, checkOut } = await req.json();
  const newAttendance = new Attendance({ user, checkIn, checkOut });
  await newAttendance.save();
  return Response.json(newAttendance);
}
