import { PostDef, UserDef } from "@/app/lib/definations"
import Image from "next/image"
import ReactionBtn from "../buttons/ReactionBtn";
import Tag from "./Tag";
import Button2 from "../buttons/Button2";
import React from "react";

const PostCard = ({ post, setPost }: { post: PostDef, setPost: React.Dispatch<React.SetStateAction<string | null>> }) => {
	return (
		<div className="bg-foreground relative shadow-xl rounded-lg max-w-[22rem] w-full h-[28rem] p-5 before:content-[''] before:bg-background before:w-[30%] before:h-4 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:rounded-b-2xl before:shadow">
			<div className="flex flex-col h-full">
				<div className="rounded-xl overflow-hidden aspect-video h-full">
					<Image className="h-full object-cover object-center" src={post.image} alt={post.title} width={1000} height={720} />
				</div>
				<div className="flex flex-col justify-between h-full">
					<div className="py-3">
						<h2 className="text-lg font-normal text-primary-text mt-2">{post.title}</h2>
						<p className="text-sm text-secondary-text mt-2">{post.body.slice(0, 150)}...</p>
						<div className="flex space-x-2 py-3 justify-end">
							{post.tags.map((tag) => (<Tag key={tag} text={tag} />))}
						</div>
					</div>

					<div className="flex w-full justify-between">
						<Button2 clickFn={() => setPost(post.id)} theme="accent" text="Comments" type="button" size="sm" />
						<ReactionBtn name={post.id} initialLikes={post.reactions.likes} />
					</div>
				</div>
			</div>

		</div>
	)
}

export default PostCard;