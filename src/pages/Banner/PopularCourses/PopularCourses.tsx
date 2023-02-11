import React from "react";
import functionalImg from "../../../assets/functional-test.jpg";
const PopularCourses = () => {
	return (
		<div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-16 mx-3 md:mx-10 lg:20">
            <div className="lg:col-span-2">
                <h2 className="text-5xl font-bold">It's Easy To Start <br /> <br/><span className=" px-4 py-2 bg-orange-400 rounded-lg">Learning</span></h2>
            </div>
			<div className="lg:col-span-3">
				<img src={functionalImg} alt="" />
			</div>
		</div>
	);
};

export default PopularCourses;
