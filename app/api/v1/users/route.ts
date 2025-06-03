import { NextResponse } from "next/server";
import dbConnect, { allCollection } from "@/lib/dbConnect";



export async function POST(request: Request) {
  try {
    // Parse request body (async in Next.js App Router)
    const userData = await request.json();

    // Connect to DB and get the collection
    const userCollection = await dbConnect(allCollection.userCollection);

    // Insert data
    const result = await userCollection.insertOne(userData);

    // Return success response
    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("Error inserting user:", error);

    // Return error response
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const userCollection = await dbConnect(allCollection.userCollection);
    const users = await userCollection.find().toArray();

    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}