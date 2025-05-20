import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// This API route handles visitor count
// and returns the current count when accessed
// It uses the GET method to fetch the count
// and returns the count in JSON format
export async function GET() {
  try {
    const visitors = await prisma.visitor.findMany();
    return NextResponse.json({ count: visitors[0].count ?? 0 });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json(
      { error: "Failed to fetch visitor count" },
      { status: 500 }
    );
  }
}

// This API route handles visitor count
// and increments the count when a visitor accesses the site
// It uses the POST method to update the count
export async function POST() {
  try {
    let record = await prisma.visitor.findFirst();
    if (!record) {
      record = await prisma.visitor.create({ data: { count: 1 } });
    } else {
      record = await prisma.visitor.update({
        where: { id: record.id },
        data: { count: record.count + 1 },
      });
    }

    return NextResponse.json({ count: record.count });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "error in POST" }, { status: 500 });
  }
}
