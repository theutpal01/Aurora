import React, { useEffect } from 'react';

const Loading = () => {
	useEffect(() => {
		// Animation logic is handled by CSS and SVG
	}, []);

	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="w-48 h-48 relative">
				{/* Main outer arc */}
				<svg className="inset-0 w-full h-full" viewBox="0 0 400 400">
					<path
						d="M60,200 A140,140 0 0,1 340,200"
						fill="none"
						stroke="url(#arcGradient)"
						strokeWidth="8"
						strokeLinecap="round"
						className="opacity-90"
						style={{
							animation: "pulse 2s infinite, rotate 15s linear infinite",
							transformOrigin: "center",
							filter: "drop-shadow(0 0 8px rgba(229, 53, 233, 0.8))"
						}}
					/>

					{/* Secondary decorative arcs */}
					<path
						d="M80,180 A120,120 0 0,1 320,180"
						fill="none"
						stroke="rgba(229, 53, 233, 0.4)"
						strokeWidth="2"
						strokeLinecap="round"
						style={{
							animation: "pulse 3s infinite, rotate 20s linear infinite",
							transformOrigin: "center"
						}}
					/>

					<path
						d="M70,190 A130,130 0 0,1 330,190"
						fill="none"
						stroke="rgba(229, 53, 233, 0.3)"
						strokeWidth="1.5"
						strokeLinecap="round"
						style={{
							animation: "pulse 2.5s infinite, rotate 18s linear infinite",
							transformOrigin: "center"
						}}
					/>
				</svg>

				{/* Cyan cross line with endpoint circles */}
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
					<line
						x1="120"
						y1="120"
						x2="280"
						y2="280"
						stroke="url(#cyanLineGradient)"
						strokeWidth="6"
						strokeLinecap="round"
						className="opacity-90"
						style={{
							animation: "dash 3s ease-in-out infinite alternate, glow 2s infinite",
							strokeDasharray: "300",
							strokeDashoffset: "300",
							filter: "drop-shadow(0 0 5px rgba(53, 233, 229, 0.8))"
						}}
					/>

					{/* Small endpoint circles */}
					<circle
						cx="120"
						cy="120"
						r="5"
						fill="#35e9e5"
						style={{
							animation: "pulseGrow 2s infinite",
							filter: "drop-shadow(0 0 5px rgba(53, 233, 229, 0.8))"
						}}
					/>

					<circle
						cx="280"
						cy="280"
						r="5"
						fill="#35e9e5"
						style={{
							animation: "pulseGrow 2s infinite",
							animationDelay: "0.5s",
							filter: "drop-shadow(0 0 5px rgba(53, 233, 229, 0.8))"
						}}
					/>
				</svg>

				{/* Pink cross line with endpoint circles */}
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
					<line
						x1="280"
						y1="120"
						x2="120"
						y2="280"
						stroke="url(#pinkLineGradient)"
						strokeWidth="6"
						strokeLinecap="round"
						className="opacity-90"
						style={{
							animation: "dash 3s ease-in-out infinite alternate-reverse, glow 2.5s infinite",
							animationDelay: "0.5s",
							strokeDasharray: "300",
							strokeDashoffset: "300",
							filter: "drop-shadow(0 0 5px rgba(229, 53, 181, 0.8))"
						}}
					/>

					{/* Small endpoint circles */}
					<circle
						cx="280"
						cy="120"
						r="5"
						fill="#e535b5"
						style={{
							animation: "pulseGrow 2s infinite",
							filter: "drop-shadow(0 0 5px rgba(229, 53, 181, 0.8))"
						}}
					/>

					<circle
						cx="120"
						cy="280"
						r="5"
						fill="#e535b5"
						style={{
							animation: "pulseGrow 2s infinite",
							animationDelay: "0.5s",
							filter: "drop-shadow(0 0 5px rgba(229, 53, 181, 0.8))"
						}}
					/>
				</svg>

				{/* Blue line with endpoint circles and data points */}
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
					<line
						x1="200"
						y1="120"
						x2="200"
						y2="280"
						stroke="url(#blueLineGradient)"
						strokeWidth="6"
						strokeLinecap="round"
						className="opacity-90"
						style={{
							animation: "dash 2.5s ease-in-out infinite alternate, glow 3s infinite",
							animationDelay: "0.75s",
							strokeDasharray: "200",
							strokeDashoffset: "200",
							filter: "drop-shadow(0 0 5px rgba(53, 88, 233, 0.8))"
						}}
					/>

					{/* Small endpoint circles */}
					<circle
						cx="200"
						cy="120"
						r="5"
						fill="#3558e9"
						style={{
							animation: "pulseGrow 2s infinite",
							filter: "drop-shadow(0 0 5px rgba(53, 88, 233, 0.8))"
						}}
					/>

					<circle
						cx="200"
						cy="280"
						r="5"
						fill="#3558e9"
						style={{
							animation: "pulseGrow 2s infinite",
							animationDelay: "0.5s",
							filter: "drop-shadow(0 0 5px rgba(53, 88, 233, 0.8))"
						}}
					/>

					{/* Data points along the line */}
					<circle
						cx="200"
						cy="160"
						r="3"
						fill="#3558e9"
						style={{
							animation: "twinkle 3s infinite",
							animationDelay: "0.2s",
							filter: "drop-shadow(0 0 3px rgba(53, 88, 233, 0.8))"
						}}
					/>

					<circle
						cx="200"
						cy="200"
						r="3"
						fill="#3558e9"
						style={{
							animation: "twinkle 3s infinite",
							animationDelay: "0.4s",
							filter: "drop-shadow(0 0 3px rgba(53, 88, 233, 0.8))"
						}}
					/>

					<circle
						cx="200"
						cy="240"
						r="3"
						fill="#3558e9"
						style={{
							animation: "twinkle 3s infinite",
							animationDelay: "0.6s",
							filter: "drop-shadow(0 0 3px rgba(53, 88, 233, 0.8))"
						}}
					/>
				</svg>

				{/* Inner arc with gradient */}
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
					<path
						d="M100,220 A100,100 0 0,0 300,220"
						fill="none"
						stroke="url(#innerArcGradient)"
						strokeWidth="6"
						strokeLinecap="round"
						className="opacity-90"
						style={{
							animation: "pulse 2.5s infinite, rotateReverse 10s linear infinite",
							animationDelay: "0.25s",
							transformOrigin: "center",
							filter: "drop-shadow(0 0 6px rgba(189, 53, 233, 0.8))"
						}}
					/>

					{/* Data points along the arc */}
					<circle
						cx="140"
						cy="212"
						r="3"
						fill="#bd35e9"
						style={{
							animation: "twinkle 3s infinite",
							animationDelay: "0.3s",
							filter: "drop-shadow(0 0 3px rgba(189, 53, 233, 0.8))"
						}}
					/>

					<circle
						cx="200"
						cy="200"
						r="3"
						fill="#bd35e9"
						style={{
							animation: "twinkle 3s infinite",
							animationDelay: "0.6s",
							filter: "drop-shadow(0 0 3px rgba(189, 53, 233, 0.8))"
						}}
					/>

					<circle
						cx="260"
						cy="212"
						r="3"
						fill="#bd35e9"
						style={{
							animation: "twinkle 3s infinite",
							animationDelay: "0.9s",
							filter: "drop-shadow(0 0 3px rgba(189, 53, 233, 0.8))"
						}}
					/>
				</svg>

				{/* Main Circles with interactive glow effects */}
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
					{/* Top right circle */}
					<circle
						cx="320"
						cy="130"
						r="20"
						fill="url(#gradientPurple)"
						className="opacity-90"
						style={{
							animation: "bounce 3s ease-in-out infinite, glow 3s infinite",
							filter: "drop-shadow(0 0 8px rgba(138, 53, 233, 0.9))"
						}}
					/>
					<circle
						cx="320"
						cy="130"
						r="26"
						fill="none"
						stroke="rgba(138, 53, 233, 0.3)"
						strokeWidth="2"
						style={{
							animation: "pulseGrow 2s infinite"
						}}
					/>

					{/* Bottom left circle */}
					<circle
						cx="80"
						cy="270"
						r="20"
						fill="url(#gradientBlue)"
						className="opacity-90"
						style={{
							animation: "bounce 3s ease-in-out infinite alternate-reverse, glow 2.8s infinite",
							animationDelay: "0.2s",
							filter: "drop-shadow(0 0 8px rgba(53, 138, 233, 0.9))"
						}}
					/>
					<circle
						cx="80"
						cy="270"
						r="26"
						fill="none"
						stroke="rgba(53, 138, 233, 0.3)"
						strokeWidth="2"
						style={{
							animation: "pulseGrow 2s infinite",
							animationDelay: "0.2s"
						}}
					/>

					{/* Bottom center circle */}
					<circle
						cx="200"
						cy="270"
						r="18"
						fill="url(#gradientPink)"
						className="opacity-90"
						style={{
							animation: "bounce 3.2s ease-in-out infinite alternate, glow 2.6s infinite",
							animationDelay: "0.5s",
							filter: "drop-shadow(0 0 8px rgba(233, 53, 138, 0.9))"
						}}
					/>
					<circle
						cx="200"
						cy="270"
						r="24"
						fill="none"
						stroke="rgba(233, 53, 138, 0.3)"
						strokeWidth="2"
						style={{
							animation: "pulseGrow 2s infinite",
							animationDelay: "0.5s"
						}}
					/>

					{/* Top left circle */}
					<circle
						cx="100"
						cy="150"
						r="12"
						fill="url(#gradientCyan)"
						className="opacity-90"
						style={{
							animation: "pulse 2s infinite, float 4s ease-in-out infinite",
							filter: "drop-shadow(0 0 6px rgba(53, 233, 194, 0.8))"
						}}
					/>
					<circle
						cx="100"
						cy="150"
						r="16"
						fill="none"
						stroke="rgba(53, 233, 194, 0.3)"
						strokeWidth="1.5"
						style={{
							animation: "pulseGrow 2s infinite"
						}}
					/>
				</svg>

				{/* Small dots with enhanced effects */}
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
					<g style={{ filter: "url(#blurFilter)" }}>
						<circle cx="130" cy="190" r="4" fill="#35a1e9" style={{ animation: "twinkle 3s infinite, orbit 15s linear infinite", animationDelay: "0.2s", transformOrigin: "center" }} />
						<circle cx="110" cy="210" r="4" fill="#35a1e9" style={{ animation: "twinkle 3s infinite, orbit 18s linear infinite", animationDelay: "0.5s", transformOrigin: "center" }} />
						<circle cx="90" cy="230" r="4" fill="#35a1e9" style={{ animation: "twinkle 3s infinite, orbit 20s linear infinite", animationDelay: "0.8s", transformOrigin: "center" }} />

						<circle cx="240" cy="150" r="4" fill="#e535a1" style={{ animation: "twinkle 3s infinite, orbitReverse 16s linear infinite", animationDelay: "0.3s", transformOrigin: "center" }} />
						<circle cx="270" cy="180" r="4" fill="#e535a1" style={{ animation: "twinkle 3s infinite, orbitReverse 19s linear infinite", animationDelay: "0.6s", transformOrigin: "center" }} />

						<circle cx="200" cy="240" r="4" fill="#35e9c2" style={{ animation: "twinkle 3s infinite, orbit 17s linear infinite", animationDelay: "0.4s", transformOrigin: "center" }} />

						<circle cx="310" cy="210" r="4" fill="#a135e9" style={{ animation: "twinkle 3s infinite, orbitReverse 21s linear infinite", animationDelay: "0.7s", transformOrigin: "center" }} />
					</g>

					{/* Additional particles */}
					<g className="small-particles">
						<circle cx="150" cy="140" r="2" fill="#ffffff" style={{ animation: "particle 12s infinite linear", animationDelay: "0s", opacity: "0.7" }} />
						<circle cx="260" cy="240" r="2" fill="#ffffff" style={{ animation: "particle 15s infinite linear", animationDelay: "1s", opacity: "0.6" }} />
						<circle cx="220" cy="100" r="2" fill="#ffffff" style={{ animation: "particle 10s infinite linear", animationDelay: "2s", opacity: "0.5" }} />
						<circle cx="180" cy="290" r="1.5" fill="#ffffff" style={{ animation: "particle 8s infinite linear", animationDelay: "0.5s", opacity: "0.4" }} />
						<circle cx="290" cy="180" r="1.5" fill="#ffffff" style={{ animation: "particle 9s infinite linear", animationDelay: "1.5s", opacity: "0.4" }} />
					</g>
				</svg>

				{/* Gradients and filters definition */}
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
					<defs>
						<radialGradient id="gradientPurple" cx="0.5" cy="0.5" r="0.5">
							<stop offset="0%" stopColor="#c27eff" />
							<stop offset="70%" stopColor="#9044e5" />
							<stop offset="100%" stopColor="#7e35e9" />
						</radialGradient>

						<radialGradient id="gradientBlue" cx="0.5" cy="0.5" r="0.5">
							<stop offset="0%" stopColor="#7ec2ff" />
							<stop offset="70%" stopColor="#4a90e2" />
							<stop offset="100%" stopColor="#357fe9" />
						</radialGradient>

						<radialGradient id="gradientPink" cx="0.5" cy="0.5" r="0.5">
							<stop offset="0%" stopColor="#ff7ec2" />
							<stop offset="70%" stopColor="#e459a6" />
							<stop offset="100%" stopColor="#e9357f" />
						</radialGradient>

						<radialGradient id="gradientCyan" cx="0.5" cy="0.5" r="0.5">
							<stop offset="0%" stopColor="#7efff4" />
							<stop offset="70%" stopColor="#59e4d4" />
							<stop offset="100%" stopColor="#35e9c2" />
						</radialGradient>

						<linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#da35e9" />
							<stop offset="50%" stopColor="#e535a1" />
							<stop offset="100%" stopColor="#da35e9" />
						</linearGradient>

						<linearGradient id="innerArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#bd35e9" />
							<stop offset="50%" stopColor="#a135e9" />
							<stop offset="100%" stopColor="#bd35e9" />
						</linearGradient>

						<linearGradient id="cyanLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#35e9e5" />
							<stop offset="100%" stopColor="#35e9c2" />
						</linearGradient>

						<linearGradient id="pinkLineGradient" x1="100%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor="#e535b5" />
							<stop offset="100%" stopColor="#e535a1" />
						</linearGradient>

						<linearGradient id="blueLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor="#3558e9" />
							<stop offset="100%" stopColor="#357fe9" />
						</linearGradient>

						<filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur in="SourceGraphic" stdDeviation="1" />
						</filter>
					</defs>
				</svg>

				{/* CSS for enhanced animations */}
				<style jsx>{`
          @keyframes pulse {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes rotateReverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }

          @keyframes dash {
            to { stroke-dashoffset: 0; }
          }

          @keyframes glow {
            0% { filter: drop-shadow(0 0 3px currentColor); }
            50% { filter: drop-shadow(0 0 10px currentColor); }
            100% { filter: drop-shadow(0 0 3px currentColor); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(5px, -5px); }
            50% { transform: translate(10px, 0); }
            75% { transform: translate(5px, 5px); }
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          
          @keyframes pulseGrow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.8; }
          }
          
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(5px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(5px) rotate(-360deg); }
          }
          
          @keyframes orbitReverse {
            from { transform: rotate(0deg) translateX(5px) rotate(0deg); }
            to { transform: rotate(-360deg) translateX(5px) rotate(360deg); }
          }
          
          @keyframes scanLine {
            0%, 100% { transform: translateY(-80px); opacity: 0; }
            10%, 90% { opacity: 0.5; }
            50% { transform: translateY(80px); opacity: 0.8; }
          }
          
          @keyframes particle {
            0% { 
              transform: translate(0, 0);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            90% {
              opacity: 0.8;
            }
            100% { 
              transform: translate(
                ${Math.random() > 0.5 ? '' : '-'}${Math.floor(Math.random() * 80) + 20}px,
                ${Math.random() > 0.5 ? '' : '-'}${Math.floor(Math.random() * 80) + 20}px
              );
              opacity: 0;
            }
          }
        `}</style>
			</div>
		</div>
	);
};

export default Loading;