"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { GoHomeFill, GoPersonFill, GoTelescopeFill } from "react-icons/go";
import { RiSearchFill } from "react-icons/ri";

const Navbar = ({ theme }: { theme: "primary" | "secondary" }) => {
	const pathname = usePathname();

	const themes = {
		primary: "*:bg-primary *:text-primary-text",
		secondary: "*:bg-secondary *:text-primary-text"
	}

	const active = `!h-10/12 relative before:content-[''] before:absolute before:top-0 before:-translate-y-1/2 ${["/explore", "/profile"].includes(pathname) ? (pathname == "/explore" ? "before:rounded-r-2xl" : "before:rounded-l-2xl") : "before:rounded-2xl"} before:left-0 before:h-5 before:bg-background before:z-50 before:w-full before:duration-0 before:transition-none after:content-[''] after:absolute after:-top-1 after:left-1/2 after:-translate-1/2 after:rounded-2xl after:left-0 after:h-3 after:bg-primary after:z-50 after:w-7/12 hover:after:w-11/12 after:duration-200 after:transition-all`

	return (
		<>
			{!pathname.includes("/login") && <nav className={`fixed font-heading bottom-0 left-0 w-full z-50 ${themes[theme]} h-20 flex md:hidden *:flex overflow-hidden justify-around  bg-background items-end *:h-full *:justify-center *:items-center *:w-full *:duration-400`}>
				<Link className={`${pathname === "/explore" ? active : ""} ${pathname === "/search" ? "rounded-tr-2xl" : ''}`} href="/explore">
					<GoTelescopeFill className={`font-heading ${pathname === "/explore" ? "text-white" : "text-gray-100"} size-6`} />
				</Link>
				<Link className={`${pathname === "/search" ? active : ""} ${pathname === "/" ? "rounded-tr-2xl" : (pathname === "/explore") ? "rounded-tl-2xl" : ""}`} href="/search">
					<RiSearchFill className={`${pathname === "/search" ? "text-white" : "text-gray-100"} size-6`} />
				</Link>
				<Link className={`${pathname === "/" ? active : ""} ${pathname === "/profile" ? "rounded-tr-2xl" : (pathname === "/search") ? "rounded-tl-2xl" : ""}`} href="/">
					<GoHomeFill className={`${pathname === "/" ? "text-white" : "text-gray-100"} size-6`} />
				</Link>
				<Link className={`${pathname === "/profile" ? active : ""} ${pathname === "/" ? "rounded-tl-2xl" : ''}`} href="/profile">
					<GoPersonFill className={`${pathname === "/profile" ? "text-white" : "text-gray-100"} size-6`} />
				</Link>
			</nav>}
		</>
	)
}

export default Navbar