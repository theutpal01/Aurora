import Image from "next/image"

const PostCard = () => {
	return (
		<div className="bg-foreground shadow-lg rounded-lg max-w-96">
			<div>
				<Image src={"/posts/.1png"} alt="Post Image txet-2xl" width={1000} height={720} />
			</div>
		</div>
	)
}

export default PostCard