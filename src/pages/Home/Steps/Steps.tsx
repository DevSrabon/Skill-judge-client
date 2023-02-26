import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { MdOutlineDone } from "react-icons/md";
import { RxDoubleArrowDown } from "react-icons/rx";

const Steps = () => {
	return (
		<div>
			<div className="flex flex-col items-center hero-section">
				<div className="relative">
					<div className={"dots"}>
						<span></span>
					</div>
					<h2 className=" text-center text-4xl md:text-6xl dark:text-white font-extrabold mb-2">
						How It Works <br /> with Step by Step
					</h2>
					<div className=" hidden md:block md:absolute md:right-[-95px] lg:right-[-135px]">
						<img
							src="https://t.commonsupport.com/driveto/images/resource/title-pattern-1.svg"
							alt=""
							className="w-44 md:w-64"
						/>
					</div>
				</div>
				{/* <p className="bg-slate-500 text-white p-1 rounded-md">EASY STEPS</p>
				<h1 className="text-4xl my-4 font-bold underline underline-offset-8 decoration-emerald-600 decoration-2">
					How It Works
				</h1> */}
			</div>
			<div className="">
				<div className="grid gap-6 row-gap-10">
					<div className="">
						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full bg-slate-100  dark:bg-black border-black dark:border-white">
										<BsArrowDown></BsArrowDown>
									</div>
								</div>
								<div className="w-px h-full bg-gray-300" />
							</div>
							<div className="pt-1 pb-8">
								<p className="mb-2 text-lg font-bold">Step 1</p>
								<h1 className="text-lg mb-3 underline underline-offset-8 decoration-1">
									Select Plan
								</h1>
								<p className="">
									All recipes are written using certain conventions, which
									define the characteristics of common ingredients. The rules
									vary from place to place.
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full bg-slate-100  dark:bg-black border-black dark:border-white">
										<RxDoubleArrowDown />
									</div>
								</div>
								<div className="w-px h-full bg-gray-300" />
							</div>
							<div className="pt-1 pb-8">
								<p className="mb-2 text-lg font-bold">Step 2</p>
								<h1 className="text-lg mb-3 underline underline-offset-8 decoration-1">
									Login/Register
								</h1>
								<p className="">
									The first mate and his Skipper too will do their very best to
									make the others comfortable in their tropic island nest.
									Michael Knight a young loner.
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full bg-slate-100  dark:bg-black border-black dark:border-white">
										<HiOutlineArrowNarrowDown />
									</div>
								</div>
								<div className="w-px h-full bg-gray-300" />
							</div>
							<div className="pt-1 pb-8">
								<p className="mb-2 text-lg font-bold">Step 3</p>
								<h1 className="text-lg mb-3 underline underline-offset-8 decoration-1">
									Make Payment
								</h1>
								<p className="">
									Tell them I hate them. Is the Space Pope reptilian!? Tell her
									she looks thin. Hello, little man. I will destroy you!
								</p>
							</div>
						</div>

						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full bg-slate-100  dark:bg-black border-black dark:border-white">
										<MdOutlineDone className="text-green-700 w-8 h-8" />
									</div>
								</div>
							</div>
							<div className="pt-1">
								<p className="mb-2 text-lg font-bold">Success</p>
								<p className="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Steps;
