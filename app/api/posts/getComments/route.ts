import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const postId = searchParams.get("postId");

		const response = await fetch(`https://dummyjson.com/comments/post/${postId}`);
		const comments = await response.json();

		const responseNext = NextResponse.json({ success: true, comments: comments.comments });
		return responseNext;
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{ error: "Failed to fetch posts" },
			{ status: 500 }
		);
	}
}
