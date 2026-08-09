import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  getDefaultSiteData,
  type SiteData,
} from "@/lib/site-defaults";

/** Admin password — in production this should be an env variable. */
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "probitas2025";

/** GET /api/content — public, returns the current site content JSON. */
export async function GET() {
  try {
    const row = await db.siteContent.findUnique({
      where: { id: "singleton" },
    });
    if (!row) {
      // Seed with defaults on first access (use upsert to avoid race conditions)
      const defaults = getDefaultSiteData();
      await db.siteContent.upsert({
        where: { id: "singleton" },
        create: { id: "singleton", data: JSON.stringify(defaults) },
        update: {},
      });
      return NextResponse.json(defaults);
    }
    const data = JSON.parse(row.data) as SiteData;
    return NextResponse.json(data);
  } catch (err) {
    console.error("[api/content GET] error:", err);
    // Fall back to defaults if DB fails
    return NextResponse.json(getDefaultSiteData());
  }
}

/** POST /api/content — admin-only, updates the entire site content. */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password, data } = body as { password: string; data: SiteData };

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Unauthorized — incorrect password" },
        { status: 401 },
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "Missing 'data' field" },
        { status: 400 },
      );
    }

    const json = JSON.stringify(data);
    await db.siteContent.upsert({
      where: { id: "singleton" },
      create: { id: "singleton", data: json },
      update: { data: json },
    });

    return NextResponse.json({ ok: true, updatedAt: new Date().toISOString() });
  } catch (err) {
    console.error("[api/content POST] error:", err);
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 },
    );
  }
}
