import { NextResponse } from "next/server";
import { generateRSS } from "@/lib/rss";

export async function GET() {
  const rss = await generateRSS();

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
