const Tag = ({ text }: { text: string }) => {
	return (
		<div>
			<span className="bg-transparent text-primary-text rounded-full px-3 py-1.5 border text-xs font-semibold cursor-default">{text}</span>
		</div>
	)
}

export default Tag