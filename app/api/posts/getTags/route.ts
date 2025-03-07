import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const response = await fetch(`https://dummyjson.com/posts/tag-list?limit=20`);
		const tags = await response.json();

		const responseNext = NextResponse.json({ success: true, tags });
		return responseNext;
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch tags" },
			{ status: 500 }
		);
	}
}
