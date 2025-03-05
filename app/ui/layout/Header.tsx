"use client";
import Image from "next/image"
import ThemeControl from "../controls/ThemeControl"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
	const pathname = usePathname();
	return (
		<>
			{!pathname.includes("/login") && <div className="relative w-full h-20 flex justify-between bg-background px-4 items-center border-b border-secondary-text shadow-lg z-50">
				<div className="flex items-center space-x-6">
					<Link href="/">
						<Image src="/logo.svg" className="h-full aspect-square" alt="Aurora Logo" width={40} height={40} />
					</Link>
					<Link href="/">
						<h1 className="text-3xl font-bold text-primary-text">Aurora</h1>
					</Link>
				</div>
				<ThemeControl />
			</div>}
		</>
	)
}

export default Header