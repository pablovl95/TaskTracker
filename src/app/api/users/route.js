import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return Response.json(users);
}

export async function POST(req) {
  await dbConnect();
  const { name, email, role } = await req.json();
  const newUser = new User({ name, email, role });
  await newUser.save();
  return Response.json(newUser);
}
