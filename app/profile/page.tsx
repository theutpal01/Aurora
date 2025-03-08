"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { decodeToken, getToken, logout } from "../lib/auth";
import { UserDef } from "../lib/definations";
import Image from "next/image";
import Button2 from "../ui/buttons/Button2";
import { FaSave, FaShare } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import Input from "../ui/inputs/Input";
import Loading from "../ui/controls/Loading";
import { useRouter } from "next/navigation";
import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { isMobile } from "react-device-detect";



const Page = () => {
	const router = useRouter();
	const isAuthenticated = useAuth();
	const [userData, setUserData] = useState<UserDef | null>(null);
	const [dummyData, setDummyData] = useState<UserDef | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");
	const [edit, setEdit] = useState<boolean>(false);

	const PageView = () => {
		return (
			<>
				{userData && dummyData && !loading &&
					<div className="bg-background flex flex-col overflow-x-hidden justify-center items-center px-4">
						<div className="flex flex-col w-full py-4">
							<div className="flex w-full items-center space-x-4">
								<div className="w-3/12  flex justify-center items-center py-3">
									<div className="rounded-full w-fit bg-foreground p-3 shadow">
										<Image className="w-52 " src={userData.image} alt={userData?.username} width={100} height={100} />
									</div>
								</div>
								<div className="grow flex space-y-4 pl-5 flex-col">
									<h2 className="font-semibold text-primary-text text-2xl">{userData.firstname + " " + userData.lastname}<span className="font-normal text-base">{`  (${userData.username})`}</span></h2>
									<div className="flex text justify-around text-secondary-text">
										<p className="flex flex-col"><span className="text-xl font-bold text-primary-text">10</span>Posts</p>
										<p className="flex flex-col"><span className="text-xl font-bold text-primary-text">25</span>Followers</p>
										<p className="flex flex-col"><span className="text-xl font-bold text-primary-text">87</span>Following</p>
									</div>
								</div>
							</div>
							<div className="flex w-11/12 self-center space-x-4 justify-start mt-6">
								<Button2 theme="primary" type="button" text="Edit Profile" size="sm" icon={<FaPencil />} clickFn={() => setEdit(!edit)} />
								<Button2 theme="usecondary" type="button" text="" size="sm" icon={<FaShare />} />
							</div>
						</div>
						<div className="flex w-full h-[1px] mb-4 bg-gray-200" />

						<div className={`flex ${edit ? "h-full" : "h-full"} duration-300 flex-col items-baseline w-full`}>
							<h2 className="text-3xl text-primary-text font-heading">Edit Profile</h2>
							<form className="w-full space-y-4 py-4">
								<Input text={dummyData.username} type="text" placeholder="Username" name="username" handleChange={(e) => setDummyData({ ...dummyData, username: e.target.value })} />
								<Input text={dummyData.firstname} type="text" placeholder="First Name" name="firstname" handleChange={(e) => setDummyData({ ...dummyData, firstname: e.target.value })} />
								<Input text={dummyData.lastname} type="text" placeholder="Last Name" name="lastname" handleChange={(e) => setDummyData({ ...dummyData, lastname: e.target.value })} />
								<Input text={dummyData.email} type="email" placeholder="Email" name="email" handleChange={(e) => setDummyData({ ...dummyData, email: e.target.value })} />
								<Input text={dummyData.phone} type="text" placeholder="Phone" name="phone" handleChange={(e) => setDummyData({ ...dummyData, phone: e.target.value })} />
								<Input text={dummyData.gender} type="text" placeholder="Gender" name="gender" handleChange={(e) => setDummyData({ ...dummyData, gender: e.target.value })} />
								<div className="flex space-x-4">
									<Button2 text="Save" type="submit" theme="secondary" size="sm" clickFn={(e) => { e.preventDefault(); }} icon={<FaSave />} />
									<Button2 text="Logout" type="button" theme="primary" icon={<LuLogOut />} size="sm" clickFn={() => { logout(); router.push("/login"); }} />
								</div>
							</form>
						</div>
					</div>}
			</>
		)
	}

	useEffect(() => {
		const fetchProfile = async () => {
			const token = getToken();
			if (!token) throw new Error("No token found");

			try {
				const user = decodeToken(token);
				if (!user) throw new Error("Invalid token");
				const res = await fetch(`/api/profile?userId=${user.id}`, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.error);

				setUserData(data);
				setDummyData(data);
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
		<div className="bg-background w-full h-full">
			{loading && <div className="w-full flex h-full"><Loading /></div>}
			{error && <div>{error}</div>}
			{userData && dummyData && !loading &&
				(isMobile ?
					<div>
						<PageView />
					</div>
					:
					<PerfectScrollbar>
						<PageView />
					</PerfectScrollbar>)
			}
		</div>
	)
}

export default Page