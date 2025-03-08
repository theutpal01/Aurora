"use client";
import Image from "next/image";
import Input from "../ui/inputs/Input";
import { useState } from "react";
import { TbLogin2 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import Button2 from "../ui/buttons/Button2";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {
	const isAuthenticated = useAuth();
	const [data, setData] = useState({
		email: "",
		password: ""
	});
	const [error, setError] = useState("");
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (!data.email || !data.password) {
			setError("Please fill all fields");
			toast.error("Please fill all fields");
			return;
		}

		if (data.password.length < 8) {
			setError("Password must be at least 8 characters");
			toast.error("At least 8 characters required ");
			return;
		}

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const result = await res.json();
			if (!res.ok) throw new Error(result.error);
			toast.success("Login successful");

			setTimeout(() => {
				router.push("/");
			}, 3000);

		} catch (err: any) {
			setError(err.message);
			toast.error(err.message);
			setData({ ...data, password: '' });
		}
	};

	if (isAuthenticated) {
		router.push("/");
		return null;
	}

	return (
		<div className="bg-background absolute h-screen w-screen md:bg-white md:flex md:justify-center md:items-center">
			<ToastContainer theme="colored" draggable position="bottom-right" />
			<div className="w-full relative md:bg-accent/40 md:rounded-2xl md:shadow-lg md:max-w-4/5 xl:max-w-3/5 flex h-full flex-col md:flex-row justify-start md:justify-center items-center md:max-h-2/3 md:before:content-[''] md:before:absolute md:before:-translate-x-1/2 md:before:bg-accent/30 md:before:w-4 md:before:h-full md:before:rounded-l-[100%]">
				<div className="flex md:w-1/2 bg-background h-1/2 md:h-full flex-col items-center justify-center space-y-4">
					<Image className="size-40 md:size-44 lg:size-56" src="logo.svg" alt="Aurora Logo" width={100} height={100} />
					<h1 className="text-4xl uppercase font-title">Aurora</h1>
				</div>
				<div className="flex bg-accent/40 md:bg-transparent relative md:w-1/2 px-4 lg:px-8 justify-center items-center ms:h-full grow flex-col w-full before:content-[''] before:h-6 before:w-full before:bg-accent/30 md:before:bg-transparent before:absolute before:top-0 before:rounded-t-[100%] before:-translate-y-full">
					<form onSubmit={handleLogin} className="space-y-5 w-full sm:w-3/4">
						<Input
							name="email"
							type="email"
							placeholder="Email"
							text={data.email}
							handleChange={handleChange}
						/>
						<Input
							name="password"
							type="password"
							placeholder="Password"
							text={data.password}
							handleChange={handleChange}
						/>
						<div className="flex justify-center py-6">
							<Button2 type="submit" text="Login" theme="primary" size="lg" icon={<TbLogin2 className="text-white size-5 font-bold" />} clickFn={(e: React.FormEvent) => handleLogin(e)} />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Page