import { NextResponse } from "next/server";
import { generateToken } from "@/app/lib/auth";

export async function POST(req: Request) {
	const { email, password } = await req.json();

	// Fetch users from API
	const response = await fetch("https://dummyjson.com/users");
	const { users } = await response.json();

	const user = users.find((user: any) => user.email === email);
	if (!user) {
		return NextResponse.json({ error: "User not found" }, { status: 400 });
	}

	// Check password (DummyJSON does not use hashed passwords)
	if (user.password !== password) {
		return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
	}

	// Generate token
	const token = generateToken({
		id: user.id,
		email: user.email
	});

	// Create response and set cookies manually
	const responseNext = NextResponse.json({ success: true });

	responseNext.headers.append(
		"Set-Cookie",
		`token=${token}; SameSite=Strict; Max-Age=3600; Path=/`
	);


	return responseNext;
}
