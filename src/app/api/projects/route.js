import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
  await dbConnect();
  const projects = await Project.find({}).populate("users");
  return Response.json(projects);
}

export async function POST(req) {
  await dbConnect();
  const { name, description, users } = await req.json();
  const newProject = new Project({ name, description, users });
  await newProject.save();
  return Response.json(newProject);
}
