import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

// This API route handles visitor count
// and returns the current count when accessed
// It uses the GET method to fetch the count
// and returns the count in JSON format
export async function GET() {
  try {
    const count = await prisma.visitor.count();

    return NextResponse.json({ count });
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
export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    const userAgent = req.headers.get("user-agent") || "unknown";

    let visitor = await prisma.visitor.findFirst({
      where: { ip, userAgent },
    });
    if (!visitor) {
      visitor = await prisma.visitor.create({
        data: { ip, userAgent },
      });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "error in POST" }, { status: 500 });
  }
}
