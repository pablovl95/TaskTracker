import dbConnect from "@/lib/mongodb";
import Task from "@/models/Task";

export async function GET() {
  await dbConnect();
  const tasks = await Task.find({}).populate("assignedTo project");
  return Response.json(tasks);
}

export async function POST(req) {
  await dbConnect();
  const { title, description, status, assignedTo, project } = await req.json();
  const newTask = new Task({ title, description, status, assignedTo, project });
  await newTask.save();
  return Response.json(newTask);
}
