import { CommentDef } from "@/app/lib/definations"
import Image from "next/image"

const CommentCard = ({ comment }: { comment: CommentDef }) => {
	return (
		<div className="flex gap-2 space-y-3">
			<div className="rounded-full overflow-hidden size-12 p-2 bg-background">
				<Image src={comment.user.image} alt={comment.user.username} width={60} height={60} />
			</div>
			<div className="flex flex-col">
				<h4 className="font-normal text-primary-text">{comment.user.username}</h4>
				<p className="text-sm text-secondary-text">{comment.body}</p>
			</div>
		</div>
	)
}

export default CommentCard