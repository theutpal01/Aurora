import jwt from "jsonwebtoken";
import { SiFrontendmentor } from "react-icons/si";

const SECRET = process.env.JWT_SECRET!;

// Generate JWT Token
export const generateToken = (user: object) => {
	console.log("Generating token for:", user, SECRET);
	return jwt.sign(user, SECRET, { expiresIn: "1h" });
};

// Verify JWT Token
export const verifyToken = (token: string) => {
	try {
		return jwt.verify(token, SECRET);
	} catch (err) {
		return null;
	}
};

// Get Token from Cookie
export const getToken = () => {
	const token = document.cookie
		.split("; ")
		.find(row => row.startsWith("token="))
		?.split("=")[1];
	console.log("Token:", token);
	return token;
};

// Decode JWT Token
export const decodeToken = (token: string): { id: string, email: string } | null => {
	return jwt.decode(token);
};
