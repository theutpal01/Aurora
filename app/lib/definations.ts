export interface ButtonDef {
	text: string;
	type: "button" | "submit" | "reset";
	className?: string;
	theme?: "primary" | "secondary" | "accent";
	size?: "sm" | "md" | "lg" | "xl";
	icon?: React.ReactNode | undefined;
	rounded?: boolean;
	clickFn?: ((e: React.FormEvent) => void) | undefined;
}

export interface Button2Def {
	text: string;
	type: "button" | "submit" | "reset";
	className?: string;
	theme?: "primary" | "secondary" | "accent" | "uprimary" | "usecondary" | "uaccent";
	size?: "sm" | "md" | "lg" | "xl";
	icon?: React.ReactNode | undefined;
	rounded?: boolean;
	clickFn?: ((e: React.FormEvent) => void) | undefined;
}

export interface ReactionBtnDef {
	text: string;
	className?: string;
	size?: "sm" | "md" | "lg" | "xl";
	checked: boolean;
	icon?: React.ReactNode | undefined;
	clickFn?: ((e: React.FormEvent) => void) | undefined;
}

export interface InputDef {
	text: string;
	className?: string;
	theme?: "primary" | "secondary" | "accent";
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

export interface PostDef {
	id: string;
	title: string;
	body: string;
	tags: string[];
	userId: string
	image: string;
	reactions: { likes: number, dislikes: number };
	views: number;
}

export interface UserPostDef {
	id: string;
	title: string;
	body: string;
	tags: string[];
	image: string;
	reactions: { likes: number, dislikes: number };
	views: number;
	userId: string;
	username: string;
	firstname: string;
	lastname: string;
	userImage: string;
	email: string;
	phone: string;
	gender: string;
}

export interface CommentDef {
	id: string;
	body: string;
	postId: string;
	likes: string;
	user: { id: string, username: string, fullName: string, image: string };
}