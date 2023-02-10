import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const BasicProblem = () => {
	const { isLoading, error, refetch, data }: any = useQuery({
		queryKey: ["user"],
		queryFn: () =>
			fetch(`${process.env.REACT_APP_API_URL}/problems`, {
				headers: {
					// authorization: `bearer ${localStorage.getItem('token')}`
				},
			}).then((res) => res.json()),
	});
	console.log(data);
	return (
		<div className="bg-[#f3f7f7] md:pl-16 py-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
			<div className=" grid grid-cols-1 divide-y md:col-span-2 lg:col-span-3">
				{data?.map((problem: any) => (
					<div className=" flex justify-between items-center mx-4 py-5 px-5 bg-white shadow-lg ">
						<div>
							<h3 className="text-xl">{problem.title}</h3>
							<small>
								<span className="text-orange-300">{problem.difficulty}, </span>
								<span>Max Score: {problem.maxScore}, </span>
								<span>Success Rate: {problem.successRate}%</span>
							</small>
							<p>{problem.types}</p>
						</div>
						<div>
							<Link to={`/problems/${problem._id}`}>
								{" "}
								<button className="btn btn-active btn-sm">Solve Challenge</button>
							</Link>
						</div>
					</div>
				))}
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
				<hr className="divide-y my-5" />
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
