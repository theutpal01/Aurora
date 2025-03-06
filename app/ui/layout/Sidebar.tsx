"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { GoHomeFill, GoPersonFill, GoTelescopeFill } from "react-icons/go";
import { RiSearchFill } from "react-icons/ri";

const Sidebar = ({ theme }: { theme: "primary" | "secondary" }) => {

	const themes = {
		primary: "bg-foreground *:text-primary-text",
		secondary: "bg-secondary *:text-primary-text"
	}

	const active = `bg-background w-9/12 rounded-xl inset-shadow-sm ${theme === "primary" ? "*:text-primary" : "text-secondary"}`

	const pathname = usePathname();
	return (
		<>
			{!pathname.includes("/login") &&
				<nav className={`h-[89vh] md:h-[90vh] w-96 lg:w-[275px] xl:w-96 z-50 ${themes[theme]} hidden md:flex flex-col py-5 drop-shadow-md`}>
					<div className='flex *:flex flex-col grow *:space-x-4 items-center *:w-10/12 *:p-4 *:text-xl *:duration-200'>
						<Link className={`${pathname === "/explore" ? active : ""}`} href="/explore">
							<GoTelescopeFill className={`size-6`} />
							<p>Explore</p>
						</Link>
						<Link className={`${pathname === "/search" ? active : ""}`} href="/search">
							<RiSearchFill className={`size-6`} />
							<p>Search</p>
						</Link>
						<Link className={`${pathname === "/" ? active : ""}`} href="/">
							<GoHomeFill className={`size-6`} />
							<p>Home</p>
						</Link>
					</div>
					<div className='flex flex-col items-center *:flex *:p-4 *:space-x-4 *:text-xl *:w-10/12'>
						<Link className={`${pathname === "/profile" ? active : ""}`} href="/profile">
							<GoPersonFill className={`size-6`} />
							<p>Profile</p>
						</Link>
					</div>
				</nav>
			}
		</>
	)
}

export default Sidebar