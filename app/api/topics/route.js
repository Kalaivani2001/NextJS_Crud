import connectMongoDB from "@/libs/mongodb";
import {Topic} from "@/models/topic";
import { Users } from "@/models/topic";
import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { title, description ,userName} = await request.json();
//   await connectMongoDB();
//   await Topic.create({userName, title, description });
//   return NextResponse.json({ message: "Topic Created" }, { status: 201 });
// }

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
// export async function POST(request) {
//   // const token = jwt.sign(req.body, secretKey);
//   const { userName, email ,password,role} = await request.json();
//   await connectMongoDB();
//   await Users.create({userName, email ,password,role});
//   return NextResponse.json({ message: "Sign In successfully" }, { status: 201 });
// }