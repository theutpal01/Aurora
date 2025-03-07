import React from "react"
import { IconType } from "react-icons"

const Tag = ({ text, icon }: { text: string, icon?: React.ReactElement }) => {
	return (
		< span className="bg-transparent text-primary-text rounded-full px-3 py-1.5 border text-xs font-normal cursor-default flex space-x-2 justify-center  items-center" >
			{icon}
			<p>{text}</p>
		</span >
	)
}

export default Tag