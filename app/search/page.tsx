"use client";
import { useAuth } from "../hooks/useAuth";
import Searchbar from "../ui/inputs/Searchbar"

const Page = () => {
	const isAuthenticated = useAuth();
	if (!isAuthenticated) return null;

	return (
		<div className="bg-background h-full flex item-center flex-col">
			<div className="relative p-4 px-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:bg-gray-500 after:w-[95%] after:-translate-x-1/2 after:duration-0">
				<Searchbar />
			</div>
		</div>
	)
}

export default Page