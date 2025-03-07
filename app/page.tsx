"use client";

import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import PostCard from "./ui/cards/PostCard";
import { PostDef } from "./lib/definations";
import PostView from "./ui/cards/PostView";
import Loading from "./ui/controls/Loading";

export default function Home() {
	const isAuthenticated = useAuth();
	const [postNumber, setPostNumber] = useState<string | null>(null);
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
				let postsData = await data.json();

				postsData = postsData.posts.map((post: PostDef) => {
					return {
						id: post.id,
						title: post.title,
						body: post.body,
						tags: post.tags,
						userId: post.userId,
						image: "/posts/" + Math.floor(Math.random() * 5 + 1) + ".png",
						reactions: post.reactions,
						views: post.views
					}
				});
				setPosts(postsData);
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
		<div className="g-background w-full h-full flex justify-center">
			{loading && <div className="w-full flex h-full"><Loading /></div>}
			{error &&
				<h3 className="text-primary-text">{error}</h3>
			}

			{posts &&
				<div className="grid h-full grid-cols-1 lg:grid-cols-2 justify-center gap-5 mx-4 my-8">
					{posts.map((post: PostDef) => (
						<PostCard key={post.id} setPost={setPostNumber} post={post} />

					))}
					<PostView setPostNumber={setPostNumber} post={posts.filter((post) => post.id === postNumber)[0]} />

				</div>
			}
		</div >
	);
}
