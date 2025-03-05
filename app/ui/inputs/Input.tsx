"use client";
import { InputDef } from "@/app/lib/definations"

const Input = ({ text, className, name, placeholder="Enter text", theme = "primary", type="text", size="md", icon, handleChange }: InputDef) => {
	const themes = {
		primary: "focus:border-primary/50 hover:border-primary/50 focus:shadow-primary/10 hover:shadow-primary/10",
		secondary: "focus:border-secondary/50 hover:border-secondary/50 focus:shadow-secondary/10 hover:shadow-secondary/10"
	}

	const sizes = {
		sm: "h-9 text-sm",
		md: "h-11 text-base",
		lg: "h-14 text-lg",
		xl: "h-16 text-xl"
	}

	return (
		<div className="flex leading-8 items-center relative min-w-56">
			{icon && <div className="absolute left-3">{icon}</div>}
			<input className={`w-full h-11 leading-8 ${className} ${sizes[size]} ${icon ? "px-12" : "px-4"} ${themes[theme]} border-2 border-transparent rounded-xl bg-foreground text-primary-text duration-300 ease-linear outline-0 placeholder-gray shadow focus:outline-0 focus:shadow-lg hover:outline-0 hover:shadow-lg`} type={type} placeholder={placeholder} onChange={handleChange} value={text} name={name} />
		</div>
	)
}

export default Input