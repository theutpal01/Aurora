import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const authHeader = req.headers.get("authorization");
		if (!authHeader) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const response = await fetch("https://dummyjson.com/posts");
		const { posts } = await response.json();

		const responseNext = NextResponse.json({ success: true, posts });
		return responseNext;
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch posts" },
			{ status: 500 }
		);
	}
}
