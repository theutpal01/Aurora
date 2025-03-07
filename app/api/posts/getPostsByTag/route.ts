import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const { postId }: { postId: number } = await req.json();

		const response = await fetch(`https://dummyjson.com/posts/tag-list`);
		const tags = await response.json();

		const responseNext = NextResponse.json({ success: true, tags });
		return responseNext;
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch posts" },
			{ status: 500 }
		);
	}
}
