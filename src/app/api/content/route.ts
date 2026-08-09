import { NextRequest, NextResponse } from "next/server";
import { getDefaultSiteData, type SiteData } from "@/lib/site-defaults";

// Force static export - returns static default data for static deployment
export const dynamic = "force-static";

/** GET /api/content — returns static default data for static deployment. */
export async function GET() {
  // Static deployment always returns default content
  return NextResponse.json(getDefaultSiteData());
}

/** POST /api/content — disabled in static deployment. */
export async function POST(req: NextRequest) {
  return NextResponse.json(
    { error: "Admin panel disabled in static deployment" },
    { status: 403 },
  );
}
