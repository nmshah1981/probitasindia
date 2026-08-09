import { NextRequest, NextResponse } from "next/server";

// Force static export
export const dynamic = "force-static";

/** POST /api/upload — disabled in static deployment. */
export async function POST(req: NextRequest) {
  return NextResponse.json(
    { error: "Upload disabled in static deployment" },
    { status: 403 },
  );
}
