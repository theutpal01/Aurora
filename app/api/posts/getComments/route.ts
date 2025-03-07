import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { postId }: { postId: number } = await req.json();

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
