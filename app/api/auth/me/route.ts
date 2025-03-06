import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";

export async function GET(req: Request) {
	const authHeader = req.headers.get("Authorization");
	if (!authHeader) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const tokenHeader = authHeader.split(" ")[1];
	const decoded = verifyToken(tokenHeader);

	if (!decoded) {
		return NextResponse.json({ error: "Invalid token" }, { status: 401 });
	}

	const token = req.headers.get("cookie")?.split(";").find((cookie) => {
		return cookie.includes("token");
	})?.split("=")[1];
	if (!token || !verifyToken(token)) {
		return NextResponse.json({ authenticated: false }, { status: 401 });
	}

	return NextResponse.json({ authenticated: true });
}
