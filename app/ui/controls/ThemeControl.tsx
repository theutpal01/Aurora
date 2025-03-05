// import {} from "react-icons";
"use client";
import { useState } from "react";

const ThemeControl = () => {
	const [light, setLight] = useState(true);

	const toggleTheme = () => {
		if (light === true) {
			document.getElementsByTagName("body")[0].classList.add("dark");
			document.getElementsByTagName("body")[0].classList.remove("light");
			setLight(false);
		} else {
			document.getElementsByTagName("body")[0].classList.add("light");
			document.getElementsByTagName("body")[0].classList.remove("dark");
			setLight(true);
		}
	};
	return (
		<label className="text-base relative inline-block w-[4em] h-[2.2em] rounded-[30px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
			<input className="opacity-0 w-0 h-0" checked={light} onChange={toggleTheme} id="checkbox" type="checkbox" />
			<span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 duration-300 rounded-[30px] overflow-hidden before:absolute before:content-[''] before:h-[1.2em] before:w-[1.2em] before:rounded-[20px] before:left-[0.5em] before:bottom-[0.5em] before:duration-300 before:ease-[cubic-bezier(0.81, -0.04, 0.38, 1.5)] before:inset-shadow-[8px_-4px_0px_0px_#ffffff] ${light ? "bg-[#00a6ff] before:translate-x-[1.8em] before:inset-shadow-[15px_-4px_0px_15px_#ffcf48]" : "bg-[#2a2a2a]"}`}>

				<div className={`bg-white rounded-[50%] absolute w-[5px] h-[5px] transition-all duration-300 left-[2.5em] top-[0.5em] ${!light ? "opacity-100" : "opacity-0"}`}></div>
				<div className={`bg-white rounded-[50%] absolute w-[5px] h-[5px] transition-all duration-300 left-[2.2em] top-[1.2em] ${!light ? "opacity-100" : "opacity-0"}`}></div>
				<div className={`bg-white rounded-[50%] absolute w-[5px] h-[5px] transition-all duration-300 left-[3em] top-[0.9em] ${!light ? "opacity-100" : "opacity-0"}`}></div>
				<svg viewBox="0 0 16 16" className={`cloud_1 w-[3.5em] absolute ${light ? "opacity-100" : "opacity-0"} -left-[1.1em] -bottom-[1.4em] transition-all duration-300`}>
					<path
						transform="matrix(.77976 0 0 .78395-299.99-418.63)"
						fill="#fff"
						d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
					></path>
				</svg>
			</span>
		</label>
	)
}

export default ThemeControl;