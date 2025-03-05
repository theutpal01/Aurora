export interface ButtonDef {
	text: string;
	type: "button" | "submit" | "reset";
	className?: string;
	theme?: "primary" | "secondary";
	size?: "sm" | "md" | "lg" | "xl";
	icon?: React.ReactNode | undefined;
	clickFn?: ((e: React.FormEvent) => void) | undefined;
}

export interface InputDef {
	text: string;
	className?: string;
	theme?: "primary" | "secondary";
	type: "text" | "password" | "email" | "number";
	placeholder: string;
	name: string;
	size?: "sm" | "md" | "lg" | "xl";
	icon?: React.ReactNode | undefined;
	handleChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}