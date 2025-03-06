"use client";
import Image from "next/image";
import Input from "../ui/inputs/Input";
import { useState } from "react";
import { TbLogin2 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import Button2 from "../ui/buttons/Button2";

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
		console.log(data);
	}

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(data);
		setError("");

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const result = await res.json();
			if (!res.ok) throw new Error(result.error);
			router.push("/");
		} catch (err: any) {
			setError(err.message);
			setData({...data, password: ''});
		}
	};
	
	if (isAuthenticated) {
		router.push("/");
		return null;
	}
	return (
		<div className="bg-background absolute h-screen w-screen md:bg-white md:flex md:justify-center md:items-center">
			<div className="w-full md:bg-background md:rounded-2xl md:shadow-lg md:max-w-3/4 flex h-full flex-col md:flex-row justify-start md:justify-center items-center p-4 md:max-h-2/3">
				<div className="flex md:w-1/2 flex-col items-center space-y-4 mt-6">
					<Image className="size-40 md:size-44 lg:size-56" src="logo.svg" alt="Aurora Logo" width={100} height={100} />
					<h1 className="text-4xl uppercase">Aurora</h1>
				</div>
				<form onSubmit={handleLogin} className="flex md:w-1/2 lg:px-8 justify-center h-full flex-col w-full space-y-5">
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
						<Button2 type="submit" text="Login" theme="primary" size="lg" icon={<TbLogin2 className="text-white size-5 font-bold" />} clickFn={(e: React.FormEvent) => handleLogin(e)}/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Page