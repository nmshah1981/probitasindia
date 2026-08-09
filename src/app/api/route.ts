import { NextResponse } from "next/server";

// Force static export for API routes (they won't work on static hosting anyway)
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}