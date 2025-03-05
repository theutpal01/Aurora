import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/layout/Navbar";
import Header from "./ui/layout/Header";


// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "Aurora",
	description: "A social media platform for people who love to interact and connect with others.",
	icons: "favicon.png",
	viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="relative light">
				<Header />
				<Navbar theme="primary" />
				{children}
			</body>
		</html>
	);
}
