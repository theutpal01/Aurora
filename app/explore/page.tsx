"use client";
import { useAuth } from "../hooks/useAuth";

const Page = () => {
	const isAuthenticated = useAuth();
	if (!isAuthenticated) return null;

	return (
		<div className="bg-background h-full w-full flex justify-center items-center">EXPLORE</div>
	)
}

export default Page