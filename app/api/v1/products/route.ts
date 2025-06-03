import { NextResponse } from "next/server";
import dbConnect, { allCollection } from "@/lib/dbConnect";

export async function GET() {
  try {
    const productCollection = await dbConnect(allCollection.productCollection);
    const data = await productCollection.find().toArray();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}