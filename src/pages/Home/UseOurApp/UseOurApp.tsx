import React from 'react';

const UseOurApp = () => {
    return (
			<div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-16 lg:20 pt-5 lg:pt-10">
				<div className="lg:col-span-3">
					<img
						src="https://i.ibb.co/7WSz6YH/5243336.png"
						className="w-full"
						alt="money"
					/>
				</div>
				<div className="lg:col-span-2">
					<h2 className="sm:text-3xl md:text-4xl font-bold text-gray-400 mb-4 md:mb-8 text-center md:text-left">
						Easy And Modern Way To Use Our Application
					</h2>
					<p className="text-gray-400 text-justify">
						With real time transaction. It will allow you to enroll our premium
						courses to learn programming languages and increase your problem
						solving skills.
					</p>
					<button className="p-4 my-5 bg-emerald-500 rounded-xl text-white w-full text-center md:text-left md:w-28">
						Read More
					</button>
				</div>
			</div>
		);
};

export default UseOurApp;