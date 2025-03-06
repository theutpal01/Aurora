"use client";

import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import PostCard from "./ui/cards/PostCard";
import { PostDef } from "./lib/definations";

export default function Home() {
	const isAuthenticated = useAuth();
	const [posts, setPosts] = useState<Array<PostDef>>([]);
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
		<div className="bg-background relative w-full  flex justify-center items-center">
			{loading && <div className="flex h-[90%] w-full justify-center items-center"><h2 className="text-primary-text">Loading...</h2></div>}
			{error &&
				<h3 className="text-primary-text">{error}</h3>
			}

			{posts &&
				<div className="grid h-full grid-cols-1 lg:grid-cols-2 justify-center gap-5 mx-4 my-8">
					{posts.map((post: PostDef) => (
						<PostCard key={post.id} post={{
							id: post.id,
							title: post.title,
							body: post.body,
							tags: post.tags,
							userId: post.userId,
							image: "/posts/" + Math.floor(Math.random() * 5 + 1) + ".png",
							reactions: post.reactions,
							views: post.views
						}} />
					))}
				</div>
			}
		</div >
	);
}
