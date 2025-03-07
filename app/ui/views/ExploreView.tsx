import { useRouter } from 'next/navigation'
import { PostDef } from '@/app/lib/definations'
import React, { useState } from 'react'
import PostCard from '../cards/PostCard'
import PostView from './PostView'
import Button2 from '../buttons/Button2'

const ExploreView = ({ data }: { data: { tag: string, posts: Array<PostDef> } }) => {
	const [postNumber, setPostNumber] = useState<string | null>(null);
	const router = useRouter()
	return (
		<div className='flex flex-col text-primary-text space-y-3'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-heading'>{`More on ${data.tag[0].toUpperCase() + data.tag.slice(1)}`}</h2>
			</div>
			<div className='flex gap-3 flex-wrap justify-center'>
				<PostView setPostNumber={setPostNumber} post={data.posts.filter((post) => post.id === postNumber)[0]} />
				{data.posts.slice(0, 3).map((post: PostDef) => (
					<PostCard key={post.id} post={post} setPost={setPostNumber} />
				))}
			</div>
			<div className='flex justify-end'>
				<Button2 text={`Explore ${data.tag[0].toUpperCase() + data.tag.slice(1)}`} type='button' theme='usecondary' size='sm' clickFn={() => router.push(`/search?query=${data.tag}`)}/>
			</div>
		</div>
	)
}

export default ExploreView