"use client";

import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { stringify } from "querystring";

export default function Home() {
	const isAuthenticated = useAuth();
	const [posts, setPosts] = useState<Array<object>>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {

		const fetchPosts = async () => {
			try {
				const data = await fetch("/api/posts/getAll", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
				});
				const postsData = await data.json();
				console.log(postsData.posts);
				setPosts(postsData.posts);
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setLoading(false);
			}
		}

		fetchPosts();
	}, []);

	if (!isAuthenticated) return null;

	return (
		<div className="bg-background h-[88vh] flex justify-center items-center">
			{ loading && <h2 className="text-primary-text">Loading...</h2> }
			{error && <h3 className="text-primary-text">{error}</h3>}
		</div>
	);
}
