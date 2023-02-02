import { BsCheckCircleFill } from "react-icons/bs";
const PopularCourses = () => {
	return (
		<div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-16 my-2 md:my-5">
			<div className="lg:col-span-2">
				<h2 className="text-xl md:text-5xl mb-2 md:mb-5 text-gray-400 font-bold">
					<span className="block mb-2 md:mb-5 ">It's Easy To Start</span>
					<span className=" px-4 italic pb-2  border-slate-500 border-2  bg-white dark:bg-black rounded-2xl">
						Learning
					</span>
				</h2>
				<p className="text-gray-400 text-justify">
					Our sign-in process lets you start learning journey without much
					hustle. Our aim is to create a great learning experience for you.
				</p>
				<div className="mt-2 md:mt-5 text-gray-400 flex flex-col gap-3">
					<p className="flex items-center gap-2 font-semibold">
						<BsCheckCircleFill className="text-orange-400 text-xl" />
						Create account
					</p>
					<p className="flex items-center gap-2 font-semibold">
						<BsCheckCircleFill className="text-orange-400 text-xl" />
						Purchase lessons
					</p>
					<p className="flex items-center gap-2 font-semibold">
						<BsCheckCircleFill className="text-orange-400 text-xl" />
						Start learning
					</p>
				</div>
			</div>
			<div className="lg:col-span-3 hidden md:block">
				<img src="https://i.ibb.co/0BL2gQB/693.png" alt="" />
			</div>
		</div>
	);
};

export default PopularCourses;
