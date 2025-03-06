import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { postId }: { postId: number } = await req.json();

		const response = await fetch(`https://dummyjson.com/posts/${postId}`);
		const post = await response.json();

		const responseNext = NextResponse.json({ success: true, post });
		return responseNext;
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch posts" },
			{ status: 500 }
		);
	}
}
