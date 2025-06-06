import { NextResponse } from "next/server";
import dbConnect, { allCollection } from "@/lib/dbConnect";

export async function GET() {
  try {
    const categoryCollection = await dbConnect(allCollection.categoryCollection);
    const data = await categoryCollection.find().toArray();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}