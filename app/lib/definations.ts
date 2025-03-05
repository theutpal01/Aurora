export interface ButtonDef {
	text: string;
	type: "button" | "submit" | "reset";
	className?: string;
	theme?: "primary" | "secondary";
	size?: "sm" | "md" | "lg" | "xl";
	icon?: React.ReactNode | undefined;
	rounded?: boolean;
	clickFn?: ((e: React.FormEvent) => void) | undefined;
}

export interface Button2Def {
	text: string;
	type: "button" | "submit" | "reset";
	className?: string;
	theme?: "primary" | "secondary" | "uprimary" | "usecondary";
	size?: "sm" | "md" | "lg" | "xl";
	icon?: React.ReactNode | undefined;
	rounded?: boolean;
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


export interface UserDef {
	id: string;
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	image: string;
	phone: string;
	gender: string;
}