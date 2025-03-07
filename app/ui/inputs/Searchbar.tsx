const Searchbar = ({ text, handleChange, clickFn }:
	{ text: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => (void), clickFn: () => (void) }) => {
	return (
		<div className="h-10 flex items-center justify-center bg-foreground rounded-xl overflow-hidden cursor-pointer w-full pl-4 drop-shadow">
			<input
				value={text}
				onChange={handleChange}
				placeholder="Search"
				id="search"
				className="w-full h-full border-0 outline-0 text-primary-text"
				name="search"
				type="text"
			/>

			<label className="px-3 cursor-pointer active:scale-90 scale-110 duration-200">
				<svg className="w-3.5 fill-primary-text" viewBox="0 0 512 512" onClick={clickFn}>
					<path
						d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
					></path>
				</svg>
			</label>
		</div>
	)
}

export default Searchbar