import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export async function GET() {
 try {
  // const post = await prisma.post.create({
  //  data: {
  //   title: "ddmnsbsdfdsfsdfbdjs",
  //   body: "]dsjfdsfsdhfdih",
  //   slug: "ds",
  //  },
  // });
  const post = await prisma.post.findMany();
  return NextResponse.json({ post });
 } catch (error) {
  return NextResponse.json({ message: "error", error }, { status: "500" });
 }
}
