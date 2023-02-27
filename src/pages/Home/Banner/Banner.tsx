import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "./styles.css";
import PrimaryButton from "../../../components/shared/PrimaryButton/PrimaryButton";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

const Banner = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState<Boolean>(false);


	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);
	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;
	let option: any
	const renderThemeChanger = () => {
		if (theme === "dark") {
			return (option = {
				autoPlay: true,
				background: {
					color: {
						value: "#000",
					},
					image: "",
					position: "50% 50%",
					repeat: "no-repeat",
					size: "cover",
					opacity: 1,
				},
				backgroundMask: {
					composite: "destination-out",
					cover: {
						color: {
							value: "#000",
						},
						opacity: 1,
					},
					enable: false,
				},
				defaultThemes: {},
				delay: 0,
				fullScreen: {
					enable: false,
					zIndex: -1,
				},
				detectRetina: true,
				duration: 0,
				fpsLimit: 180,
				interactivity: {
					detectsOn: "window",
					events: {
						onClick: {
							enable: true,
							mode: "",
						},
						onDiv: {
							selectors: [],
							enable: false,
							mode: [],
							type: "circle",
						},
						onHover: {
							enable: true,
							mode: "repulse",
							parallax: {
								enable: false,
								force: 60,
								smooth: 10,
							},
						},
						resize: {
							delay: 0.5,
							enable: true,
						},
					},
					modes: {
						attract: {
							distance: 200,
							duration: 0.4,
							easing: "ease-out-quad",
							factor: 1,
							maxSpeed: 50,
							speed: 1,
						},
						bounce: {
							distance: 200,
						},
						bubble: {
							distance: 400,
							duration: 2,
							mix: false,
							opacity: 0.8,
							size: 40,
							divs: {
								distance: 200,
								duration: 0.4,
								mix: false,
								selectors: [],
							},
						},
						grab: {
							distance: 400,
							links: {
								blink: false,
								consent: false,
								opacity: 1,
							},
						},
						push: {
							default: true,
							groups: [],
							quantity: 4,
						},
						remove: {
							quantity: 2,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
							factor: 100,
							speed: 1,
							maxSpeed: 50,
							easing: "ease-out-quad",
							divs: {
								distance: 200,
								duration: 0.4,
								factor: 100,
								speed: 1,
								maxSpeed: 50,
								easing: "ease-out-quad",
								selectors: [],
							},
						},
						slow: {
							factor: 3,
							radius: 200,
						},
						trail: {
							delay: 1,
							pauseOnStop: false,
							quantity: 1,
						},
						light: {
							area: {
								gradient: {
									start: {
										value: "#ffffff",
									},
									stop: {
										value: "#000000",
									},
								},
								radius: 1000,
							},
							shadow: {
								color: {
									value: "#000000",
								},
								length: 2000,
							},
						},
					},
				},
				manualParticles: [],
				particles: {
					bounce: {
						horizontal: {
							random: {
								enable: false,
								minimumValue: 0.1,
							},
							value: 1,
						},
						vertical: {
							random: {
								enable: false,
								minimumValue: 0.1,
							},
							value: 1,
						},
					},
					collisions: {
						absorb: {
							speed: 1,
						},
						bounce: {
							horizontal: {
								random: {
									enable: false,
									minimumValue: 0.1,
								},
								value: 1,
							},
							vertical: {
								random: {
									enable: false,
									minimumValue: 0.1,
								},
								value: 1,
							},
						},
						enable: false,
						mode: "bounce",
						overlap: {
							enable: true,
							retries: 0,
						},
					},
					color: {
						value: "#ffffff",
						animation: {
							h: {
								count: 0,
								enable: false,
								offset: 0,
								speed: 1,
								decay: 0,
								sync: true,
							},
							s: {
								count: 0,
								enable: false,
								offset: 0,
								speed: 1,
								decay: 0,
								sync: true,
							},
							l: {
								count: 0,
								enable: false,
								offset: 0,
								speed: 1,
								decay: 0,
								sync: true,
							},
						},
					},
					groups: {},
					move: {
						angle: {
							offset: 0,
							value: 90,
						},
						attract: {
							distance: 200,
							enable: false,
							rotate: {
								x: 600,
								y: 1200,
							},
						},
						center: {
							x: 50,
							y: 50,

							radius: 0,
						},
						decay: 0,
						distance: {},
						direction: "none",
						drift: 0,
						enable: true,
						gravity: {
							acceleration: 9.81,
							enable: false,
							inverse: false,
							maxSpeed: 50,
						},
						path: {
							clamp: true,
							delay: {
								random: {
									enable: false,
									minimumValue: 0,
								},
								value: 0,
							},
							enable: false,
							options: {},
						},
						outModes: {
							default: "out",
							bottom: "out",
							left: "out",
							right: "out",
							top: "out",
						},
						random: false,
						size: false,
						speed: 2,
						spin: {
							acceleration: 0,
							enable: false,
						},
						straight: false,
						trail: {
							enable: false,
							length: 10,
							fill: {},
						},
						vibrate: false,
						warp: false,
					},
					number: {
						density: {
							enable: true,
							width: 1920,
							height: 1080,
						},
						limit: 0,
						value: 80,
					},
					opacity: {
						random: {
							enable: true,
							minimumValue: 0.1,
						},
						value: {
							min: 0.1,
							max: 0.5,
						},
						animation: {
							count: 0,
							enable: true,
							speed: 2,
							decay: 0,
							sync: false,
							destroy: "none",
							startValue: "random",
							minimumValue: 0.1,
						},
					},
					reduceDuplicates: false,
					shadow: {
						blur: 0,
						color: {
							value: "#000",
						},
						enable: false,
						offset: {
							x: 0,
							y: 0,
						},
					},
					shape: {
						options: {
							character: {
								value: [
									"Js",
									"Ts",
									"</>",
									"Go",
									"F#",
									"py",
									"</html>",
									"<?php",
									"$array",
									"C++",
									"C",
									"C#",
									"i++",
								],
								font: "Verdana",
								style: "",
								weight: "400",
								fill: true,
							},
						},
						type: "char",
					},
					size: {
						random: {
							enable: false,
							minimumValue: 1,
						},
						value: 16,
						animation: {
							count: 0,
							enable: false,
							speed: 10,
							decay: 0,
							sync: false,
							destroy: "none",
							startValue: "random",
							minimumValue: 10,
						},
					},
					stroke: {
						width: 1,
						color: {
							value: "#ffffff",
							animation: {
								h: {
									count: 0,
									enable: false,
									offset: 0,
									speed: 1,
									decay: 0,
									sync: true,
								},
								s: {
									count: 0,
									enable: false,
									offset: 0,
									speed: 1,
									decay: 0,
									sync: true,
								},
								l: {
									count: 0,
									enable: false,
									offset: 0,
									speed: 1,
									decay: 0,
									sync: true,
								},
							},
						},
					},
					zIndex: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						opacityRate: 1,
						sizeRate: 1,
						velocityRate: 1,
					},
					life: {
						count: 0,
						delay: {
							random: {
								enable: false,
								minimumValue: 0,
							},
							value: 0,
							sync: false,
						},
						duration: {
							random: {
								enable: false,
								minimumValue: 0.0001,
							},
							value: 0,
							sync: false,
						},
					},
					rotate: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						animation: {
							enable: false,
							speed: 0,
							decay: 0,
							sync: false,
						},
						direction: "clockwise",
						path: false,
					},
					destroy: {
						bounds: {},
						mode: "none",
						split: {
							count: 1,
							factor: {
								random: {
									enable: false,
									minimumValue: 0,
								},
								value: 3,
							},
							rate: {
								random: {
									enable: false,
									minimumValue: 0,
								},
								value: {
									min: 4,
									max: 9,
								},
							},
							sizeOffset: true,
							particles: {},
						},
					},
					roll: {
						darken: {
							enable: false,
							value: 0,
						},
						enable: false,
						enlighten: {
							enable: false,
							value: 0,
						},
						mode: "vertical",
						speed: 25,
					},
					tilt: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						animation: {
							enable: false,
							speed: 0,
							decay: 0,
							sync: false,
						},
						direction: "clockwise",
						enable: false,
					},
					twinkle: {
						lines: {
							enable: false,
							frequency: 0.05,
							opacity: 1,
						},
						particles: {
							enable: false,
							frequency: 0.05,
							opacity: 1,
						},
					},
					wobble: {
						distance: 5,
						enable: false,
						speed: {
							angle: 50,
							move: 10,
						},
					},

					orbit: {
						animation: {
							count: 0,
							enable: false,
							speed: 1,
							decay: 0,
							sync: false,
						},
						enable: false,
						opacity: 1,
						rotation: {
							random: {
								enable: false,
								minimumValue: 0,
							},
							value: 45,
						},
						width: 1,
					},
					repulse: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						enabled: false,
						distance: 1,
						duration: 1,
						factor: 1,
						speed: 1,
					},
				},
				pauseOnBlur: true,
				pauseOnOutsideViewport: true,
				responsive: [],
				smooth: true,
				style: {},
				themes: [],
				zLayers: 100,
			});
		} else {
			return (option = {
				autoPlay: true,
				background: {
					color: {
						value: "#fff",
					},
					image: "",
					position: "50% 50%",
					repeat: "no-repeat",
					size: "cover",
					opacity: 1,
				},
				backgroundMask: {
					composite: "destination-out",
					cover: {
						color: {
							value: "#000",
						},
						opacity: 1,
					},
					enable: false,
				},
				defaultThemes: {},
				delay: 0,
				fullScreen: {
					enable: false,
					zIndex: -1,
				},
				detectRetina: true,
				duration: 0,
				fpsLimit: 180,
				interactivity: {
					detectsOn: "window",
					events: {
						onClick: {
							enable: true,
							mode: "",
						},
						onDiv: {
							selectors: [],
							enable: false,
							mode: [],
							type: "circle",
						},
						onHover: {
							enable: true,
							mode: "repulse",
							parallax: {
								enable: false,
								force: 60,
								smooth: 10,
							},
						},
						resize: {
							delay: 0.5,
							enable: true,
						},
					},
					modes: {
						attract: {
							distance: 200,
							duration: 0.4,
							easing: "ease-out-quad",
							factor: 1,
							maxSpeed: 50,
							speed: 1,
						},
						bounce: {
							distance: 200,
						},
						bubble: {
							distance: 400,
							duration: 2,
							mix: false,
							opacity: 0.8,
							size: 40,
							divs: {
								distance: 200,
								duration: 0.4,
								mix: false,
								selectors: [],
							},
						},
						grab: {
							distance: 400,
							links: {
								blink: false,
								consent: false,
								opacity: 1,
							},
						},
						push: {
							default: true,
							groups: [],
							quantity: 4,
						},
						remove: {
							quantity: 2,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
							factor: 100,
							speed: 1,
							maxSpeed: 50,
							easing: "ease-out-quad",
							divs: {
								distance: 200,
								duration: 0.4,
								factor: 100,
								speed: 1,
								maxSpeed: 50,
								easing: "ease-out-quad",
								selectors: [],
							},
						},
						slow: {
							factor: 3,
							radius: 200,
						},
						trail: {
							delay: 1,
							pauseOnStop: false,
							quantity: 1,
						},
						light: {
							area: {
								gradient: {
									start: {
										value: "#000000",
									},
									stop: {
										value: "#ffffff",
									},
								},
								radius: 1000,
							},
							shadow: {
								color: {
									value: "#000000",
								},
								length: 2000,
							},
						},
					},
				},
				manualParticles: [],
				particles: {
					bounce: {
						horizontal: {
							random: {
								enable: false,
								minimumValue: 0.1,
							},
							value: 1,
						},
						vertical: {
							random: {
								enable: false,
								minimumValue: 0.1,
							},
							value: 1,
						},
					},
					collisions: {
						absorb: {
							speed: 1,
						},
						bounce: {
							horizontal: {
								random: {
									enable: false,
									minimumValue: 0.1,
								},
								value: 1,
							},
							vertical: {
								random: {
									enable: false,
									minimumValue: 0.1,
								},
								value: 1,
							},
						},
						enable: false,
						mode: "bounce",
						overlap: {
							enable: true,
							retries: 0,
						},
					},
					color: {
						value: "#000000",
						animation: {
							h: {
								count: 0,
								enable: false,
								offset: 0,
								speed: 1,
								decay: 0,
								sync: true,
							},
							s: {
								count: 0,
								enable: false,
								offset: 0,
								speed: 1,
								decay: 0,
								sync: true,
							},
							l: {
								count: 0,
								enable: false,
								offset: 0,
								speed: 1,
								decay: 0,
								sync: true,
							},
						},
					},
					groups: {},
					move: {
						angle: {
							offset: 0,
							value: 90,
						},
						attract: {
							distance: 200,
							enable: false,
							rotate: {
								x: 600,
								y: 1200,
							},
						},
						center: {
							x: 50,
							y: 50,

							radius: 0,
						},
						decay: 0,
						distance: {},
						direction: "none",
						drift: 0,
						enable: true,
						gravity: {
							acceleration: 9.81,
							enable: false,
							inverse: false,
							maxSpeed: 50,
						},
						path: {
							clamp: true,
							delay: {
								random: {
									enable: false,
									minimumValue: 0,
								},
								value: 0,
							},
							enable: false,
							options: {},
						},
						outModes: {
							default: "out",
							bottom: "out",
							left: "out",
							right: "out",
							top: "out",
						},
						random: false,
						size: false,
						speed: 2,
						spin: {
							acceleration: 0,
							enable: false,
						},
						straight: false,
						trail: {
							enable: false,
							length: 10,
							fill: {},
						},
						vibrate: false,
						warp: false,
					},
					number: {
						density: {
							enable: true,
							width: 1920,
							height: 1080,
						},
						limit: 0,
						value: 80,
					},
					opacity: {
						random: {
							enable: false,
							minimumValue: 0.1,
						},
						value: {
							min: 0.1,
							max: 0.5,
						},
						animation: {
							count: 0,
							enable: true,
							speed: 2,
							decay: 0,
							sync: false,
							destroy: "none",
							startValue: "random",
							minimumValue: 0.1,
						},
					},
					reduceDuplicates: false,
					shadow: {
						blur: 0,
						color: {
							value: "#fff",
						},
						enable: false,
						offset: {
							x: 0,
							y: 0,
						},
					},
					shape: {
						options: {
							character: {
								value: [
									"Js",
									"Ts",
									"</>",
									"Go",
									"F#",
									"py",
									"</html>",
									"<?php",
									"$array",
									"C++",
									"C",
									"C#",
									"i++",
								],
								font: "Verdana",
								style: "",
								weight: "400",
								fill: true,
							},
						},
						type: "char",
					},
					size: {
						random: {
							enable: false,
							minimumValue: 1,
						},
						value: 16,
						animation: {
							count: 0,
							enable: false,
							speed: 10,
							decay: 0,
							sync: false,
							destroy: "none",
							startValue: "random",
							minimumValue: 10,
						},
					},
					stroke: {
						width: 1,
						color: {
							value: "#000",
							animation: {
								h: {
									count: 0,
									enable: false,
									offset: 0,
									speed: 1,
									decay: 0,
									sync: true,
								},
								s: {
									count: 0,
									enable: false,
									offset: 0,
									speed: 1,
									decay: 0,
									sync: true,
								},
								l: {
									count: 0,
									enable: false,
									offset: 0,
									speed: 1,
									decay: 0,
									sync: true,
								},
							},
						},
					},
					zIndex: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						opacityRate: 1,
						sizeRate: 1,
						velocityRate: 1,
					},
					life: {
						count: 0,
						delay: {
							random: {
								enable: false,
								minimumValue: 0,
							},
							value: 0,
							sync: false,
						},
						duration: {
							random: {
								enable: false,
								minimumValue: 0.0001,
							},
							value: 0,
							sync: false,
						},
					},
					rotate: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						animation: {
							enable: false,
							speed: 0,
							decay: 0,
							sync: false,
						},
						direction: "clockwise",
						path: false,
					},
					destroy: {
						bounds: {},
						mode: "none",
						split: {
							count: 1,
							factor: {
								random: {
									enable: false,
									minimumValue: 0,
								},
								value: 3,
							},
							rate: {
								random: {
									enable: false,
									minimumValue: 0,
								},
								value: {
									min: 4,
									max: 9,
								},
							},
							sizeOffset: true,
							particles: {},
						},
					},
					roll: {
						darken: {
							enable: false,
							value: 0,
						},
						enable: false,
						enlighten: {
							enable: false,
							value: 0,
						},
						mode: "vertical",
						speed: 25,
					},
					tilt: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						animation: {
							enable: false,
							speed: 0,
							decay: 0,
							sync: false,
						},
						direction: "clockwise",
						enable: false,
					},
					twinkle: {
						lines: {
							enable: false,
							frequency: 0.05,
							opacity: 1,
						},
						particles: {
							enable: false,
							frequency: 0.05,
							opacity: 1,
						},
					},
					wobble: {
						distance: 5,
						enable: false,
						speed: {
							angle: 50,
							move: 10,
						},
					},

					orbit: {
						animation: {
							count: 0,
							enable: false,
							speed: 1,
							decay: 0,
							sync: false,
						},
						enable: false,
						opacity: 1,
						rotation: {
							random: {
								enable: false,
								minimumValue: 0,
							},
							value: 45,
						},
						width: 1,
					},
					repulse: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						enabled: false,
						distance: 1,
						duration: 1,
						factor: 1,
						speed: 1,
					},
				},
				pauseOnBlur: true,
				pauseOnOutsideViewport: true,
				responsive: [],
				smooth: true,
				style: {},
				themes: [],
				zLayers: 100,
			});
		}
	};
	renderThemeChanger()
	return (
		<div className="relative flex justify-center items-center hero-section">
			<div className="absolute text-center z-10">
				<div className="relative">
					<div className={"dots"}>
						<span className="top-5"></span>
					</div>
					<h2 className=" text-center  dark:text-white font-bold ">
						<span className="text-[#ff4d4d]  text-4xl md:text-7xl lg:text-8xl mb-2">
							Achieve mastery
						</span>{" "}
						<br className="mt-2" />{" "}
						<span className="text-black dark:text-white text-4xl md:text-7xl lg:text-8xl mb-5">
							through challenge
						</span>
					</h2>
				</div>
				{/* <h1 className="text-[#ff4d4d]  text-4xl md:text-7xl lg:text-8xl mb-2">
					Achieve mastery
				</h1>
				<h1 className="text-black dark:text-white text-4xl md:text-7xl lg:text-8xl mb-5">
					through challenge
				</h1> */}
				<h4 className="text-black dark:text-white text-md md:text-2xl my-5 mx-4">
					"Master the Art of Coding with Skill Judge - <br className="lg:hidden"/> The Ultimate
					Problem-Solving Platform"
				</h4>
				<div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-3">
					<Link to={"/login"}>
						<PrimaryButton>Get Started</PrimaryButton>
					</Link>
					<p className="text-[#9f8f91] text-justify">
						Sign up now to get full access to our library of <br /> problem
						challenges, quizzes, and community features!
					</p>
				</div>
			</div>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={option}
			/>
		</div>
	);
}

export default Banner;
