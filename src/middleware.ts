import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // NOTE: 쿠키에 'theme' 속성이 없다면 기본값으로 'light' 모드 설정
  const response = NextResponse.next();
  const theme = request.cookies.get("color-mode");

  if (!theme) {
    response.cookies.set("color-mode", "light");
  }

  return response;
}

export const config = {
  matcher: "/:path*", // 모든 경로
};
