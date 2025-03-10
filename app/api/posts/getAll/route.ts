import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
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
