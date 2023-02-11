import React from 'react';
import learning from "../../../assets/learning.jpg"

const EnrollNow = () => {
    return (
			<div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-5 md:mt-8 md:gap-10 bg-[#EEEFF3] px-4 py-5 md:py-10 lg:px-28 lg:py-20 my-5 ">
				<div>
					<h2 className="text-2xl md:text-5xl mb-2 md:mb-5 font-bold">
						<span className="block mb-1 md:mb-5">Improve your</span>
						<span
							className=" px-4 italic text-[#EEEFF3] border-slate-500 border-2 bg-orange-400 rounded-[100%]">
							Skills
						</span>
						<span className="ml-2">
							faster
						</span>
					</h2>
				</div>
				<div>
					<h4 className="text-xl md:text-2xl mb-2 md:mb-5 font-semibold md:font-bold text-justify">
						Speed up the speed acquisition process by finding unlimited courses
						that matches your niche.
					</h4>
					<button className="px-4 py-3 bg-orange-400 hover:bg-red-400 text-white font-semibold rounded-2xl">
						Enroll Now
					</button>
				</div>
				<div className="hidden md:block md:col-span-2 w-3/4 mx-auto">
					<img
						src={learning}
						className="h-[500px]md:h-[700px] w-[80vw]"
						alt=""
					/>
				</div>
			</div>
		);
};

export default EnrollNow;