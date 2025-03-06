import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { userId }: { userId: number } = await req.json();
		if (!userId) {
			return NextResponse.json({ error: "User ID is required" }, { status: 400 });
		}

		const response = await fetch(`https://dummyjson.com/users/${userId}`);

		if (!response.ok) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		const user = await response.json();
		const data = {
				id: user.id,
				username: user.username,
				firstname: user.firstName,
				lastname: user.lastName,
				email: user.email,
				image: user.image,
				phone: user.phone,
				gender: user.gender,
		}
		return NextResponse.json(data, { status: 200 });

	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch user profile" },
			{ status: 500 }
		);
	}
}