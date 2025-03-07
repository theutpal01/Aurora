import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/layout/Navbar";
import Header from "./ui/layout/Header";
import Sidebar from "./ui/layout/Sidebar";

export const metadata: Metadata = {
	title: "Aurora",
	description: "A social media platform for people who love to interact and connect with others.",
	icons: "favicon.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="relative overflow-hidden light bg-background">
				<Header />
				<Navbar theme="primary" />
				<div className="flex h-full max-h-[89vh] md:max-h-[90vh]">
					<Sidebar theme="accent" />
					<div className="w-full font-body antialiased overflow-auto mb-18 md:mb-0">
							{children}
					</div>
				</div>
			</body>
		</html>
	);
}
