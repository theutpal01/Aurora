import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth"; // Import your verify function

export function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value; // Get token from cookies

	if (!token) {
		return NextResponse.redirect(new URL("/login", req.url)); // Redirect if no token
	}

	// Verify token
	const user = verifyToken(token);
	if (!user) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	return NextResponse.next(); // Continue if valid token
}

// Apply middleware to specific routes
export const config = {
	matcher: ["/:path*"], // Apply middleware only to / and its subpaths
};
