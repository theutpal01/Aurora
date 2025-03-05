"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { decodeToken, getToken } from "../lib/auth";
import { UserDef } from "../lib/definations";
import Image from "next/image";
import Button2 from "../ui/buttons/Button2";
import { FaSave, FaShare } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Input from "../ui/inputs/Input";

const Page = () => {
	const isAuthenticated = useAuth();
	const [userData, setUserData] = useState<UserDef | null>(null);
	const [dummyData, setDummyData] = useState<UserDef | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");
	const [edit, setEdit] = useState<boolean>(false);

	useEffect(() => {
		const fetchProfile = async () => {
			const token = getToken();
			if (!token) throw new Error("No token found");

			try {
				const user = decodeToken(token);
				if (!user) throw new Error("Invalid token");
				console.log("ID:", user.id);
				const res = await fetch("/api/profile", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ userId: user.id })
				});

				const data = await res.json();
				console.log("Data:", data);
				if (!res.ok) throw new Error(data.error);

				setUserData({
					id: data.id,
					username: data.username,
					firstname: data.firstName,
					lastname: data.lastName,
					email: data.email,
					image: data.image,
					phone: data.phone,
					gender: data.gender,
				});

				setDummyData({
					id: data.id,
					username: data.username,
					firstname: data.firstName,
					lastname: data.lastName,
					email: data.email,
					image: data.image,
					phone: data.phone,
					gender: data.gender,
				});
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setLoading(false);
			}
		};

		fetchProfile();
	}, []);

	if (!isAuthenticated) return null;
	return (
		<>
			{loading && <div className="text-primary-text bg-background h-[88vh] flex flex-col overflow-auto justify-center items-center" >Loading...</div>}
			{error && <div>{error}</div>}
			{userData && dummyData &&
				<div className="bg-background h-full flex flex-col overflow-auto justify-center items-center px-4 pb-24">
					<div className="flex flex-col w-full py-4">
						<div className="flex w-full items-center space-x-4">
							<div className="w-3/12 flex justify-center items-center py-3">
								<div className="rounded-full w-fit bg-foreground p-3 shadow">
									<Image src={userData.image} alt={userData?.username} width={100} height={100} />
								</div>
							</div>
							<div className="w-9/12 flex space-y-4 flex-col">
								<h2 className="font-semibold text-primary-text text-lg">{userData.firstname + " " + userData.lastname}<span className="font-normal text-sm">{` (${userData.username})`}</span></h2>
								<div className="flex text-xs justify-around text-secondary-text">
									<p className="flex flex-col"><span className="text-base font-bold text-primary-text">10</span>Posts</p>
									<p className="flex flex-col"><span className="text-base font-bold text-primary-text">25</span>Followers</p>
									<p className="flex flex-col"><span className="text-base font-bold text-primary-text">87</span>Following</p>
								</div>
							</div>
						</div>
						<div className="flex space-x-4 justify-end mt-4">
							<Button2 theme="primary" type="button" text="Edit Profile" size="md" icon={<FaPencil />} clickFn={() => setEdit(!edit)} />
							<Button2 theme="uprimary" type="button" text="Share Profile" size="md" icon={<FaShare />} />
						</div>
					</div>
					<div className="flex w-11/12 h-[1px] mb-4 bg-gray-200" />

					<div className={`flex ${edit ? "h-full" : "h-full"} duration-300 flex-col items-baseline w-full`}>
						<h2 className="text-3xl font-bold text-primary-text">Edit Profile</h2>
						<form className="w-full space-y-4 py-4">
							<Input text={dummyData.username} type="text" placeholder="Username" name="username" handleChange={(e) => setDummyData({ ...dummyData, username: e.target.value })} />
							<Input text={dummyData.firstname} type="text" placeholder="First Name" name="firstname" handleChange={(e) => setDummyData({ ...dummyData, firstname: e.target.value })} />
							<Input text={dummyData.lastname} type="text" placeholder="Last Name" name="lastname" handleChange={(e) => setDummyData({ ...dummyData, lastname: e.target.value })} />
							<Input text={dummyData.email} type="email" placeholder="Email" name="email" handleChange={(e) => setDummyData({ ...dummyData, email: e.target.value })} />
							<Input text={dummyData.phone} type="text" placeholder="Phone" name="phone" handleChange={(e) => setDummyData({ ...dummyData, phone: e.target.value })} />
							<Input text={dummyData.gender} type="text" placeholder="Gender" name="gender" handleChange={(e) => setDummyData({ ...dummyData, gender: e.target.value })} />
							<Button2 text="Save" type="submit" theme="secondary" size="md" clickFn={(e) => { e.preventDefault(); console.log(dummyData) }} icon={<FaSave />} />
						</form>
					</div>
				</div>

			}
		</>
	)
}

export default Page