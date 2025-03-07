"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { PostDef } from "../lib/definations";
import Loading from "../ui/controls/Loading";
import ExploreView from "../ui/views/ExploreView";

const Page = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");
	const isAuthenticated = useAuth();
	const [displayPosts, setDisplayPosts] = useState<Array<{ tag: string, posts: Array<PostDef> }> | null>(null);

	function getRandomUniqueItems(arr: Array<string>, count: number) {
		if (count > arr.length) throw new Error("Count exceeds array length");

		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}

		return arr.slice(0, count);
	}

	const fetchPost = async (query: string) => {
		try {
			const data = await fetch(`/api/posts/search?query=${query}`, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
			const postsData = await data.json();

			let posts: Array<PostDef> = postsData.posts.map((post: PostDef) => {
				return {
					...post,
					image: "/posts/" + Math.floor(Math.random() * 5 + 1) + ".png",
				};
			});
			return posts;
		} catch (err) {
			setError((err as Error).message);
			return [];
		}
	}

	useEffect(() => {
		const fetchTags = async () => {
			try {
				const response = await fetch("/api/posts/getTags");
				const data = await response.json();
				const tags: Array<string> = data.tags.slice(0, 30);

				const postsArray = await Promise.all(tags.map(async (tag) => {
					const postList = await fetchPost(tag);
					return { tag, posts: postList };
				}));
				console.log(postsArray);
				postsArray.sort((a, b) => b.posts.length - a.posts.length);
				setDisplayPosts(postsArray);
				console.log(postsArray);

			} catch (err) {
				setError((err as Error).message);
			} finally {
				setLoading(false);
			}
		};

		fetchTags();

	}, []);

	if (!isAuthenticated) return null;

	return (
		<div className="bg-background w-full h-full flex justify-center p-6">
			{loading && <div className="w-full flex h-full"><Loading /></div>}
			{error &&
				<h3 className="text-primary-text">{error}</h3>
			}
			{!loading &&
				<div className="space-y-12">
					{displayPosts?.slice(0, 10).map((data) => (
						<ExploreView key={data.tag} data={data} />
					))}
				</div>
			}
		</div>
	)
}

export default Page