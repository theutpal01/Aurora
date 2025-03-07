import { UserDef } from '@/app/lib/definations'
import React from 'react'
import Loading from '../controls/Loading'
import Image from 'next/image'

const UsersView = ({ loading, suggestions }: { loading: boolean, suggestions: Array<UserDef> }) => {
	return (
		<>
			{loading && <div className="flex relative items-center justify-center w-full h-full"><Loading /></div>}
			{!loading &&
				<div className='flex flex-col w-full'>
					<h2 className='text-xl text-primary-text py-3'>Suggested</h2>
					{suggestions.map((user) => (
						<div key={user.id} className="flex  cursor-pointer w-full items-center justify-between p-3 bg-foreground shadow inset-shadow-2xs inset-1.5 rounded-lg my-2">
							<div className="flex items-center">
								<Image src={user.image} width={20} height={20} alt="user" className="w-12 h-12 shadow rounded-full p-2 bg-background" />
								<div className="ml-4">
									<h1 className="font-semibold text-primary-text">{user.firstname + " " + user.lastname}</h1>
									<p className="text-secondary-text">{user.username}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			}
		</>
	)
}

export default UsersView