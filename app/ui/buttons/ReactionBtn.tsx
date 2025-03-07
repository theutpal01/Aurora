import React, { useState } from 'react';
import styled from 'styled-components';

const ReactionBtn = ({ name, initialLikes }: { name: string, initialLikes: number }) => {

	const [likes, setLikes] = useState(initialLikes);
	const [reaction, setReaction] = useState<"like" | "dislike" | null>(null);
	const handleReaction = (type: "dislike" | "like") => {
		console.log(reaction, type);
		if (reaction === type) {
			setReaction(null);
			(type === "like") ? setLikes(likes - 1) : setLikes(likes + 1);
			return;
		}

		if (reaction === null) {
			if (type === "like") {
				setLikes(likes + 1);
			} else if (type === "dislike") {
				setLikes(likes - 1);
			}
			setReaction(type);
		} else {
			if (type === "like") {
				setLikes(likes + 2);
			} else if (type === "dislike") {
				setLikes(likes - 2);
			}
			setReaction(type);
		}
	};
	return (
		<StyledWrapper>
			<div className="container bg-background shadow-xl">
				<label htmlFor={`dislike-${name}`}>
					<input type="radio" name={`evaluation-${name}`} id={`dislike-${name}`} checked={reaction === "dislike"} value={"dislike"} onClick={() => handleReaction("dislike")} onChange={() => handleReaction("dislike")} />
					<svg className={`icon dislike ${reaction === "dislike" ? "fill-red-500" : "fill-primary-text"}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
						<path d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z" />
					</svg>
				</label>
				<div className={`text-primary-text border-r border-l px-3 overflow-hidden ${reaction === "dislike" ? "border-r-red-500" : ""} ${reaction === "like" ? "border-l-blue-500" : ""}`}>
					{likes}
				</div>
				<label htmlFor={`like-${name}`}>
					<input type="radio" name={`evaluation-${name}`} id={`like-${name}`} checked={reaction === "like"} value={"like"} onClick={() => handleReaction("like")} onChange={() => handleReaction("like")} />
					<svg className={`icon like ${reaction === "like" ? "fill-blue-500" : "fill-primary-text"}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
						<path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z" />
					</svg>
				</label>
			</div>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	.container {
		--col-like: #2196f3;
		--col-dislike: #ff3232;
		--transition: 350ms;
		width: 130px;
		border-radius: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 9px;
		user-select: none;
	}
	}
	.container label input {
		display: none;
	}
	.container input:checked + svg {
		animation: evaluation-animation var(--transition) ease-in-out 0s 1 normal both;
	}
	.container input:checked + svg {
		animation: evaluation-animation var(--transition) ease-in-out 0s 1 normal both;
	}
	.container .icon {
		cursor: pointer;
		height: 24px;
		width: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.container .icon .like {
		margin-left: 10px;
	}
	.container .icon .dislike {
		margin-right: 10px;
	}
	.container .count {
		transition: var(--transition);
		flex: 1;
		border-left: 1px solid var(--primary-text);
		border-right: 1px solid var(--primary-text);
		position: relative;
		height: 24px;
		overflow: hidden;
		margin: auto;
		font-size: 16px;
		font-family: sans-serif;
		display: flex;
		align-items: center;

		justify-content: center;
		gap: 0.5px;
		flex-direction: row;
	}
	.container .count .number {
		display: flex;
		color: --primary-text
		flex-direction: column;
		transform: translateY(calc(50% - 8px));
		transition: 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	@keyframes evaluation-animation {
		0%,
		100% {
			transform: scale(1) rotate(0deg);
		}
		50% {
			transform: scale(1.1) rotate(-10deg);
		}
	}`;


export default ReactionBtn;
