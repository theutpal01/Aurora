"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken } from "../lib/auth";

export const useAuth = () => {
	const router = useRouter();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await fetch("/api/auth/me", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${getToken()}`
					}
				});
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
