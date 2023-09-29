import connectMongoDB from "@/libs/mongodb";
import {Topic} from "@/models/topic";
import { Users } from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    // const token = jwt.sign(req.body, secretKey);
    const { userName, email ,password,role} = await request.json();
    await connectMongoDB();
    await Users.create({userName, email ,password,role});
    return Response.json({ message: "Sign In successfully" }, { status: 201 });
  }
