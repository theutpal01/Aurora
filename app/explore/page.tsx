"use client";
import { useAuth } from "../hooks/useAuth";

const page = () => {
	const isAuthenticated = useAuth();
	if (!isAuthenticated) return null;

	return (
		<div className="bg-background h-full flex justify-center items-center">EXPLORE</div>
	)
}

export default page