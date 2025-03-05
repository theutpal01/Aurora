"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
	const router = useRouter();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await fetch("/api/auth/me", { credentials: "include" });
				const data = await res.json();

				if (!data.authenticated) {
					router.push("/login");
				} else {
					setIsAuthenticated(true);
				}
			} catch (err) {
				router.push("/login");
			}
		};

		checkAuth();
	}, []);

	return isAuthenticated;
};
