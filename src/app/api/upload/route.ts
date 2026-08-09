import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

/** Admin password — must match the one in /api/content. */
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "probitas2025";

/**
 * POST /api/upload — admin-only, accepts a multipart/form-data file upload
 * and saves it to /public/images/. Returns the public path.
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const password = formData.get("password") as string | null;
    const file = formData.get("file") as File | null;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Unauthorized — incorrect password" },
        { status: 401 },
      );
    }

    if (!file) {
      return NextResponse.json(
        { error: "Missing 'file' field" },
        { status: 400 },
      );
    }

    // Validate file type
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: `Unsupported file type: ${file.type}` },
        { status: 400 },
      );
    }

    // Generate a unique filename
    const ext = file.name.split(".").pop()?.toLowerCase() || "png";
    const filename = `upload-${randomUUID().slice(0, 8)}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "images");
    const filePath = path.join(uploadDir, filename);

    // Ensure the directory exists
    await mkdir(uploadDir, { recursive: true });

    // Write the file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    const publicPath = `/images/${filename}`;
    return NextResponse.json({ ok: true, path: publicPath });
  } catch (err) {
    console.error("[api/upload] error:", err);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 },
    );
  }
}
