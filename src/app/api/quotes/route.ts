import { NextResponse } from "next/server";

// This API route fetches a random quote from the Chuck Norris API
export async function GET() {
  try {
    const res = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    const data = await res.json();

    return NextResponse.json({
      quote: data.value,
    });
  } catch (error) {
    console.error("Error fetching quote:", error);
    return NextResponse.json(
      { error: "Failed to fetch quote" },
      { status: 500 }
    );
  }
}
