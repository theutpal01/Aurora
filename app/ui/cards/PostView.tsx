import { CommentDef, PostDef, UserPostDef } from "@/app/lib/definations"
import Image from "next/image";
import React, { useEffect, useState } from "react"
import { BiCollapse } from "react-icons/bi"
import Tag from "./Tag";
import { FaEye, FaSave } from "react-icons/fa";
import Loading from "../controls/Loading";
import CommentCard from "./CommentCard";
import Input from "../inputs/Input";
import Button2 from "../buttons/Button2";

const PostView = ({ setPostNumber, post }: { setPostNumber: React.Dispatch<React.SetStateAction<string | null>>, post: PostDef | null }) => {
	const [show, setShow] = useState<boolean>(false);
	const [postData, setPostData] = useState<UserPostDef | null>(null)
	const [comments, setComments] = useState<Array<CommentDef>>([])
	const [comment, setComment] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchComments = async (post: PostDef) => {
			try {
				const data = await fetch("/api/posts/getComments", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ postId: post.id })
				});
				let commentsData = await data.json();

				const updatedComments = await Promise.all(
					commentsData.comments.map(async (comment: CommentDef) => {
						const userdata = await fetch("/api/profile/", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({ userId: comment.user.id })
						});

						const userData = await userdata.json();

						return {
							...comment,
							user: {
								...comment.user, // Keep other user properties
								image: userData.image, // Update only the image
							}
						};
					})
				);
				commentsData.comments = updatedComments;
				setComments(commentsData.comments);
			} catch (err) {
				console.log(err)
			} finally {
				setLoading(false);
			}
		}

		const fetchUser = async (post: PostDef) => {
			setLoading(true);
			try {
				const data = await fetch("/api/profile/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ userId: post.userId })
				});
				const userData = await data.json();
				setPostData({
					...post,
					...userData,
					id: post.id,
					image: post.image,
					userImage: userData.image
				});
			} catch (err) {
				console.log(err)
			} finally {
				fetchComments(post);
			}
		}

		if (post != null) {
			setShow(true);
			fetchUser(post);
		}

	}, [post]);

	return (
		<div className={`absolute w-screen h-screen left-0 z-50 bg-foreground/10 flex justify-center items-center ${show ? "top-0" : "-top-full"} duration-300 ease-in`}>
			<div className="lg:w-[90%] lg:h-[90%] w-full h-full bg-primary-text/10 backdrop-blur-3xl z-[100] relative px-4 pb-4 pt-14 md:rounded-lg">
				<BiCollapse className="cursor-pointer active:scale-90 hover:scale-110 duration-150 text-primary-text size-8 absolute right-0 top-0 translate-1/2 -translate-x-1/2" onClick={() => { setShow(false); setPostNumber(null); setPostData(null) }} />
				{loading && <div className="w-full flex h-full"><Loading /></div>}
				{!loading && postData && comments &&
					<div className="flex md:space-x-4 space-y-4 md:space-y-0 flex-col md:flex-row h-full overflow-auto px-2 md:px-0">
						<div className="md:w-5/12 lg:w-4/12 flex flex-col">

							<div className="rounded overflow-hidden min-h-2/5">
								<Image className="object-cover max-h-96 h-full object-center aspect-video" src={postData.image} alt={postData.title} width={1000} height={720} />
							</div>

							<div className="flex flex-col justify-between h-full">
								<div className="py-3">
									<h2 className="text-lg font-semibold text-primary-text mt-2">{postData.title}</h2>
									<p className="text-sm text-secondary-text mt-2">{postData.body}</p>
								</div>

								<div className="flex flex-row w-full justify-between items-baseline">
									<div className="">
										<div className="flex items-center space-x-4 mt-2">
											<div className="rounded-full w-15 h-15 bg-foreground p-3 shadow">
												<Image className="w-52 " src={postData.userImage} alt={postData.username} width={100} height={100} />
											</div>
											<div className="flex flex-col">
												<h2 className="font-semibold text-primary-text text-lg">{postData.firstname + " " + postData.lastname}</h2>
												<p className="text-sm text-secondary-text">{postData.username}</p>
											</div>
										</div>
										<div className="hidden md:flex space-x-2 py-3 justify-start">
											{postData.tags.map((tag) => (<Tag key={tag} text={tag} />))}
										</div>
									</div>

									<div className="md:hidden xl:block">
										<Tag icon={<FaEye />} text={"Views: " + postData.views} />
									</div>
								</div>
							</div>
						</div>
						<div className="md:w-[2px] w-full flex items-center">
							<div className="w-full h-[2px] md:h-full bg-white"></div>
						</div>
						<div className="flex flex-col justify-between space-y-2 grow">

							<div className="w-full overflow-auto">
								<h2 className="text-primary-text pb-5 text-3xl">Comments</h2>
								{comments.map((comment) => (
									<CommentCard key={comment.id} comment={comment} />
								))}{comments.map((comment) => (
									<CommentCard key={comment.id} comment={comment} />
								))}
								{comments.map((comment) => (
									<CommentCard key={comment.id} comment={comment} />
								))}{comments.map((comment) => (
									<CommentCard key={comment.id} comment={comment} />
								))}
							</div>

							<div className="flex w-full gap-2 items-center">
								<div className="grow">
									<Input className="py-4" text={comment} theme="secondary" type="text" handleChange={(e) => setComment(e.target.value)} placeholder="Add a comment" name="comment" />
								</div>
								<div>
									<Button2 text="Add" type="submit" theme="primary" size="sm" icon={<FaSave />} />
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default PostView