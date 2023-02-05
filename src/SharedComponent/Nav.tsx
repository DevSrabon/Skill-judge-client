import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import logo from "../assets/logo.png";

const Nav = () => {
	const { user, signOutUser }: any = useAuth();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<Boolean>(false);
	const [navbar, setNavbar] = useState<Boolean>(true);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const handleLogout = () => {
		signOutUser()
			.then(() => {})
			.catch((err) => {
				console.log(err);
			});
	};

	const renderThemeChanger = () => {
		if (theme === "dark") {
			return (
				<div onClick={() => setTheme("light")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#0000"
						viewBox="0 0 22 22"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-info dark:stroke-white font-semibold text-2xl cursor-pointer">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
						/>
					</svg>
				</div>
			);
		} else {
			return (
				<div onClick={() => setTheme("dark")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#0000"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-pink-800 cursor-pointer">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
						/>
					</svg>
				</div>
			);
		}
	};

	const navItems = (
		<>
			<li className="hover:text-orange-400">
				<Link to={""}>Home</Link>
			</li>
			<li className="hover:text-orange-400">
				<Link to={"qna"}>QnA</Link>
			</li>
			<li className="hover:text-orange-400">
				<Link to={""}>Categories</Link>
			</li>
			<li className="hover:text-orange-400">
				<Link to={"/quiz"}>Quiz</Link>
			</li>
			<li className="hover:text-orange-400">
				<Link to={""}>About Us</Link>
			</li>
			{user?.uid ? (
				<>
					<li className="hover:text-orange-400">
						<Link onClick={handleLogout} to="">
							Logout
						</Link>
					</li>
					<li className="hover:text-orange-400">
						<Link to="/dashboard">
							Dashboard
						</Link>
					</li>
				</>
			) : (
				<li className="hover:text-orange-400">
					<Link to={"/login"}>Login</Link>
				</li>
			)}
		</>
	);

	return (
		<nav className="fixed dark:bg-dark bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-md  z-50 w-full md:px-5 py-1  right-0 top-0 mb-20">
			<div className="justify-between px-4 mx-auto lg:items-center lg:flex">
				<div>
					<div className="flex items-center justify-between  lg:block">
						<Link to="/">
							<h2 className="text-2xl dark:text-white text-gray-600 font-bold">
								<img src={logo} className="w-16 " alt="" />
							</h2>
						</Link>
						<div className="lg:hidden flex items-center justify-center">
							<div className="cursor-default">{renderThemeChanger()}</div>
							<button
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}>
								{navbar ?  (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								):(
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) }
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center dark:text-white gap-4">
					<div className="hidden lg:block">{renderThemeChanger()}</div>
					<div
						onClick={() => setNavbar(!navbar)}
						className={`text-center flex-1 justify-self-center items-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 cursor-pointer ${
							navbar ? "hidden":"block"  
						}`}>
						<ul className="items-center justify-center font-semibold  space-y-8 lg:flex lg:space-x-6 lg:space-y-0  dark:text-white">
							{navItems}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
