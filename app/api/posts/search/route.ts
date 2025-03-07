import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const query = searchParams.get("query");

		const response = await fetch(`https://dummyjson.com/posts/search?q=${query}`);
		const posts = await response.json();

		const responseNext = NextResponse.json({ success: true, posts: posts.posts });
		return responseNext;
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch posts" },
			{ status: 500 }
		);
	}
}