"use client";

import { useAuth } from "./hooks/useAuth";

export default function Home() {
	const isAuthenticated = useAuth()

	if (!isAuthenticated) return null;

	return (
		<div className="bg-background h-screen flex justify-center items-center">
			<h1 className="text-primary">HOME</h1>
		</div>
	);
}
