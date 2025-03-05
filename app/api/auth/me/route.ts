import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";

export async function GET(req: Request) {
	const token = req.headers.get("cookie")?.split(";").find((cookie) => {
		return cookie.includes("token");
	})?.split("=")[1];
	if (!token || !verifyToken(token)) {
		return NextResponse.json({ authenticated: false }, { status: 401 });
	}

	return NextResponse.json({ authenticated: true });
}
