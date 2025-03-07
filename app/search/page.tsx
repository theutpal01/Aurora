"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import Searchbar from "../ui/inputs/Searchbar"
import { useEffect, useState } from "react";
import { PostDef } from "../lib/definations";
import Loading from "../ui/controls/Loading";
import PostCard from "../ui/cards/PostCard";
import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PostView from "../ui/views/PostView";

const Page = () => {
	const isAuthenticated = useAuth();
	const searchParams = useSearchParams();
	const router = useRouter();
	const [query, setQuery] = useState<string>(searchParams.get("query") || "");
	const [queryRes, setQueryRes] = useState<string>(searchParams.get("query") || "");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [posts, setPosts] = useState<Array<PostDef>>([]);
	const [postNumber, setPostNumber] = useState<string | null>(null);

	const fetchSearchResults = async (searchQuery: string) => {
		try {
			setLoading(true);
			const response = await fetch(`/api/posts/search?query=${searchQuery}`);
			const data = await response.json();

			if (!response.ok) throw new Error(data.error || "Failed to fetch posts");

			setPosts(
				data.posts.map((post: PostDef) => ({
					...post,
					image: `/posts/${Math.floor(Math.random() * 5 + 1)}.png`,
				}))
			);
			setError("");
			setQueryRes(query);
		} catch (err) {
			setError((err as Error).message);
			setPosts([]);
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = (searchQuery: string) => {
		setQuery(searchQuery);
		router.push(`?query=${encodeURIComponent(searchQuery)}`);
		fetchSearchResults(searchQuery);
	};

	useEffect(() => {
		if (query) {
			fetchSearchResults(query);
		}
	}, []);

	if (!isAuthenticated) return null;

	return (
		<div className="bg-background h-full w-full flex item-center flex-col">
			<div className="relative p-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:bg-gray-500 after:w-[95%] after:-translate-x-1/2 after:duration-0">
				<Searchbar text={query} handleChange={(e) => setQuery(e.target.value)} clickFn={() => handleSearch(query)} />
			</div>
			{loading && <div className="w-full flex h-full"><Loading /></div>}
			{error && <h3 className="text-primary-text">{error}</h3>}
			{!loading && posts && (
				<PerfectScrollbar className="flex flex-col w-full h-full">
					{queryRes !== "" && <h2 className="p-7 w-full text-lg text-primary-text font-semibold">{`Search Result for: ${query}`}</h2>}
					{queryRes !== "" && posts.length === 0 && <p className="text-secondary-text text-center text-sm">No results found</p>}
					<div className="relative grid p-3 w-full overflow-x-hidden justify-items-center place-content-baseline h-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-5">
						{posts.map((post: PostDef) => (
							<PostCard key={post.id} setPost={setPostNumber} post={post} />
						))}
					</div>

				</PerfectScrollbar>
			)}
			<PostView post={posts.filter((post) => post.id === postNumber)[0]} setPostNumber={setPostNumber} />
		</div>
	)
}

export default Page