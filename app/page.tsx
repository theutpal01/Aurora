"use client";

import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import PostCard from "./ui/cards/PostCard";
import { PostDef, UserDef } from "./lib/definations";
import Loading from "./ui/controls/Loading";
import PostView from "./ui/views/PostView";
import UsersView from "./ui/views/UsersView";
import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';

export default function Home() {
	const isAuthenticated = useAuth();
	const [postNumber, setPostNumber] = useState<string | null>(null);
	const [suggestions, setSuggestions] = useState<UserDef[]>([]);
	const [posts, setPosts] = useState<Array<PostDef>>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [loadingUsers, setLoadingUser] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {

		const fetchSuggestedUsers = async (posts: Array<PostDef>) => {
			try {
				const uniqueUserIds = [...(new Set(posts.map((post) => post.userId)))];
				console.log("UNIQUID: ", uniqueUserIds);
				const userProfiles = await Promise.all(
					uniqueUserIds.map(async (userId) => {
						const res = await fetch(`/api/profile?userId=${userId}`, {
							method: "GET",
							headers: { "Content-Type": "application/json" },
						});
						return res.json();
					})
				);
				console.log(userProfiles);
				setSuggestions(userProfiles);
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setLoadingUser(false);
			}
		};

		const fetchPosts = async () => {
			try {
				const data = await fetch("/api/posts/getAll", {
					method: "GET",
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
				fetchSuggestedUsers(postsData);
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
		<div className="bg-background w-full h-full flex justify-center">
			{loading && <div className="w-full flex h-full"><Loading /></div>}
			{error &&
				<h3 className="text-primary-text">{error}</h3>
			}

			{!loading && posts &&
				<div className="flex justify-between items-center overflow-auto w-full h-full space-x-2">
					<PostView setPostNumber={setPostNumber} post={posts.filter((post) => post.id === postNumber)[0]} />
					<PerfectScrollbar className="w-full m-0">
						<div className="relative overflow-x-hidden grow grid p-5 w-full justify-items-center place-content-baseline h-full grid-cols-1 lg:grid-cols-2 justify-center gap-5">
							{posts.map((post: PostDef) => (
								<PostCard key={post.id} setPost={setPostNumber} post={post} />

							))}

						</div>
					</PerfectScrollbar>
					<div className="hidden xl:flex w-1/3 border-l border-foreground bg-background drop-shadow h-full">
						<PerfectScrollbar className="w-full">
							<div className="px-3 justify-center w-full h-full overflow-x-hidden">
								<UsersView loading={loadingUsers} suggestions={suggestions} />
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			}
		</div >
	);
}
