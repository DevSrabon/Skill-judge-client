import React from "react";

const BasicProblem = () => {
	return (
		<div className="bg-[#f3f7f7] lg:pl-8 py-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-4">
			<div className="divide-y md:col-span-2 lg:col-span-3">
				<div className=" flex justify-between items-center mx-4 md:mx-20 py-5 px-5 bg-white shadow-lg ">
					<div>
						<h3 className="text-xl">Say "Hello World!" With Python</h3>
						<small>
							<span className="text-orange-300">Easy, </span>
							<span>Max Score: 5, </span>
							<span>Success Rate: 96.86%</span>
						</small>
						<p>Addition, subtraction and multiplication.</p>
					</div>
					<div>
						<button className="btn btn-active">Solve Challenge</button>
					</div>
				</div>
			</div>
			<div className="md:col-span-1">
				<div className="text-[#b2b7b9]">STATUS</div>
				<div className="form-control">
					<label className="cursor-pointer label justify-start gap-2">
						<input
							type="checkbox"
							className="checkbox checkbox-sm checkbox-secondary"
						/>
						<span className="label-text">Solved</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
						<input
							type="checkbox"
							className="checkbox checkbox-sm checkbox-secondary"
						/>
						<span className="label-text">UnSolved</span>
					</label>
                </div>
                <hr className="divide-y my-5"/>
				<div className="text-[#b2b7b9]">DIFFICULTY</div>
				<div className="form-control">
					<label className="cursor-pointer label justify-start gap-2">
						<input
							type="checkbox"
							className="checkbox checkbox-sm checkbox-secondary"
						/>
						<span className="label-text">Easy</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
						<input
							type="checkbox"
							className="checkbox checkbox-sm checkbox-secondary"
						/>
						<span className="label-text">Medium</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
						<input
							type="checkbox"
							className="checkbox checkbox-sm checkbox-secondary"
						/>
						<span className="label-text">Hard</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default BasicProblem;
