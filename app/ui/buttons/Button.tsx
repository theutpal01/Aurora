// "use client";
import { ButtonDef } from "@/app/lib/definations";

const Button = ({ text, className, type, theme = "primary", size = "md", icon = undefined, clickFn } : ButtonDef) => {
	const sizes = {
		sm: "text-base",
		md: "text-lg",
		lg: "text-xl",
		xl: "text-2xl",
	}

	const themes = {
		primary: ["before:bg-primary before:border-primary-text", "bg-primary text-primary-text"],
		secondary: ["before:bg-secondary before:border-secondary-text", "bg-secondary", "text-primary-text"]
	}

	return (
		<button type={type} className={`${className} group bg-transparent z-0 relative flex justify-center items-center duration-500 transition-all border-none before:content-[''] before:-z-10 before:bg-primary before:border-2 before:rounded-4xl before:w-[110%] before:h-full before:absolute before:rotate-[10deg] before:duration-500 before:opacity-20 hover:cursor-pointer hover:brightness-125 hover:scale-110 hover:before:rotate-0 hover:before:opacity-100 active:brightness-105 ${themes[theme][0]}`}>
			<div className={`p-4 px-5 bg-primary duration-500 hover:bg-transparent rounded-4xl ${sizes[size]} ${themes[theme][1]} tracking-wider uppercase font-semibold`}>{text}</div>
			{icon && <div className={`-translate-x-[200%] duration-500 w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 group-hover:translate-x-0`} onClick={clickFn}>
				{icon}
			</div>}
		</button>
	);
};

export default Button