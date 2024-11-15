import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("snaplink");
  const collection = db.collection("url");


  const doc = await collection.findOne({
    shorturl: body.shorturl
  })

  if(doc){
    return NextResponse.json({
        success: false,
        message: "URL already exists!!!",
      });
  }
  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

  return NextResponse.json({
    success: true,
    message: "URL successfully shortened",
  });
}
