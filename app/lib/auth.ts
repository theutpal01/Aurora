import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

// Generate JWT Token
export const generateToken = (user: object) => {
	try {
		if (!SECRET) {
			throw new Error("JWT Secret not provided");
		}
		return jwt.sign(user, SECRET, { expiresIn: "1h" });
	} catch (err) {
		console.error(err);
		return null;
	}
};

// Verify JWT Token
export const verifyToken = (token: string) => {
	try {
		if (!SECRET) {
			throw new Error("JWT Secret not provided");
		}
		return jwt.verify(token, SECRET);
	} catch (err) {
		console.error(err);
		return null;
	}
};

// Get Token from Cookie
export const getToken = () => {
	const token = document.cookie
		.split("; ")
		.find(row => row.startsWith("token="))
		?.split("=")[1];
	return token;
};

export const decodeToken = (token: string): { id: string; email: string } | null => {
	try {
		const decoded = jwt.decode(token);

		// Ensure decoded is an object and contains required fields
		if (decoded && typeof decoded === "object" && "id" in decoded && "email" in decoded) {
			return { id: decoded.id as string, email: decoded.email as string };
		}

		return null;
	} catch (err) {
		console.error(err);
		return null;
	}
};