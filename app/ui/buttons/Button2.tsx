import { ButtonDef } from "@/app/lib/definations"

const Button2 = ({ text, className, type, theme = "primary", size = "md", clickFn, icon = undefined }: ButtonDef) => {
	const sizes = {
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg",
		xl: "text-xl",
	}

	const themes = {
		primary: "text-white bg-primary px-6 py-3",
		secondary: "text-primary-text bg-secondary px-6 py-3",
		uprimary: "bg-transparent text-primary-text border-4 border-primary hover:bg-primary hover:text-white duration-100 px-5 py-2",
		usecondary: "bg-transparent text-primary-text border-4 border-secondary px-5 py-2",
	}

	return (
		<button className={`${className} ${themes[theme]} ${sizes[size]} flex items-center font-medium shadow-[0_0.7em_1.5em_-0.5em_rgba(59,48,78,0.527)] tracking-wider cursor-pointer relative rounded-lg border-0 hover:shadow-[0_0.5em_1.5em_-0.5em_rgba(88,71,116,0.627)] active:shadow-[0_0.3em_1em_-0.5em_rgba(88,71,116,0.627)] before:content-[''] before:w-1 before:h-[40%] before:bg-white before:absolute before:rounded-r-[5px] before:left-0 before:z-10 after:content-[''] after:w-1 after:h-[40%] after:bg-white after:absolute after:rounded-l-[5px] after:right-0 after:z-10 hover:before:h-[60%] hover:after:h-[60%] before:duration-200 after:duration-200 active:before:h-[40%] active:after:h-[40%]`} onClick={clickFn} type={type}>
			<div className="flex space-x-4 justify-center items-center">
				{icon}
				<p>{text}</p></div>
		</button>

	)
}

export default Button2