import { Link } from "react-router-dom";
import { FaFreeCodeCamp } from "react-icons/fa";
import { AiFillPropertySafety } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";

 
const Services = () => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 hero-section">
					<div className="relative">
						<div className={"dots"}>
							<span></span>
						</div>
						<h2 className=" text-center text-4xl md:text-6xl dark:text-white font-extrabold ">
							Designed for business teams like yours
						</h2>
						<div className=" hidden md:block md:absolute md:right-[77px] lg:right-[-47px]">
							<img
								src="https://t.commonsupport.com/driveto/images/resource/title-pattern-1.svg"
								alt=""
								className="w-44 md:w-64"
							/>
						</div>
					</div>
					{/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Designed for business teams like yours
					</h2> */}
					<p className="my-5 font-semibold text-gray-500 sm:text-xl dark:text-gray-400">
						Choose the best plan according to your need
					</p>
				</div>
				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
					<div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-xl">
						<div>
							<FaFreeCodeCamp className="text-3xl dark:text-white" />
						</div>
						<h3 className="mb-4 text-3xl font-semibold">Free</h3>
						<p className="sm:text-lg dark:text-gray-400">
							Best option for personal use & for your next project.
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">$00</span>
							<span className="text-gray-500 dark:text-gray-400">/month</span>
						</div>
						<ul className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>Individual configuration</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>No setup, or hidden fees</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Team size: <span className="font-semibold">1 developer</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Premium support:{" "}
									<span className="font-semibold">6 months</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Free updates: <span className="font-semibold">6 months</span>
								</span>
							</li>
						</ul>
						<Link
							to={"/basic"}
							className="bg-emerald-400 hover:bg-emerald-600 text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">
							Get started
						</Link>
					</div>
					<div className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white shadow-xl">
						<h1>
							<AiFillPropertySafety className="text-3xl" />
						</h1>
						<h3 className="mb-4 text-3xl font-semibold">Company</h3>
						<p className="sm:text-lg dark:text-gray-400">
							Relevant for multiple users, extended & premium support.
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">$99</span>
							<span className="text-gray-500 dark:text-gray-400">/month</span>
						</div>
						<ul className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>Individual configuration</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>No setup, or hidden fees</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Team size:{" "}
									<span className="font-semibold">10 developers</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Premium support:{" "}
									<span className="font-semibold">24 months</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Free updates: <span className="font-semibold">24 months</span>
								</span>
							</li>
						</ul>
						<Link
							to="/book/63c775893a42dc9a9c75b5d5"
							className="bg-emerald-400 hover:bg-emerald-600 text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">
							Get started
						</Link>
					</div>
					<div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-xl">
						<div>
							<BsFillBriefcaseFill className="text-3xl" />
						</div>
						<h3 className="mb-4 text-3xl font-semibold">Enterprise</h3>
						<p className="sm:text-lg dark:text-gray-400">
							Best for large scale uses and extended redistribution rights.
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">$199</span>
							<span className="text-gray-500 dark:text-gray-400">/month</span>
						</div>
						<ul className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>Individual configuration</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>No setup, or hidden fees</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Team size:{" "}
									<span className="font-semibold">100+ developers</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Premium support:{" "}
									<span className="font-semibold">36 months</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Free updates: <span className="font-semibold">36 months</span>
								</span>
							</li>
						</ul>
						<Link
							to="/book/63c775893a42dc9a9c75b5d6"
							className="bg-emerald-400 hover:bg-emerald-600 text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">
							Get started
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services; 