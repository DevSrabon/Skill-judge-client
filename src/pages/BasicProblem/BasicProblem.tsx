import { useQuery } from "@tanstack/react-query";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import Spinner from "../../SharedComponent/Spinner/Spinner";
import {BiFilterAlt} from 'react-icons/bi'

const BasicProblem = () => {
	const [search, setSearch]=useState<string>("")
	const [filter, setFilter]=useState<boolean>(false)
	const { isLoading, error, refetch, data }: any = useQuery({
		queryKey: ["user"],
		queryFn: () =>
			fetch(`${process.env.REACT_APP_API_URL}/problems`, {
				headers: {
					// authorization: `bearer ${localStorage.getItem('token')}`
				},
			}).then((res) => res.json()),
	});
	// 	 const handleChange = (e) => {
	// 			// e.preventDefault();
	// 			setSearch(e.target.value);
	// };

	if (isLoading) {
		return <Spinner/>
	}
	return (
		<div className=" bg-[#f3f7f7] md:pb-[40vh] dark:bg-gray-800 md:pl-16 py-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
			<div className="relative flex flex-col divide-y md:col-span-2 lg:col-span-3">
				{data
					?.filter((item: any) => {
						return search?.toLowerCase() === ""
							? item
							: item?.difficulty?.includes(search);
					})
					.map((problem: any) => (
						<div
							className={` flex flex-col ${
								filter ? "hidden" : "block"
							} gap-3 md:flex-row justify-between items-center mx-4 py-5 px-5 bg-white shadow-lg `}>
							<div>
								<h3 className="text-xl">{problem.title}</h3>
								<small>
									<span className="text-orange-600">
										{problem.difficulty},{" "}
									</span>
									<span>Max Score: {problem.maxScore}, </span>
									<span>Success Rate: {problem.successRate}%</span>
								</small>
								<p>{problem.types}</p>
							</div>
							<div>
								<Link to={`/problems/${problem._id}`}>
									{" "}
									<button className="btn btn-active btn-sm">
										Solve Challenge
									</button>
								</Link>
							</div>
						</div>
					))}
				<div
					className={`${
						filter ? "hidden" : "block"
					} absolute right-10 bottom-7 md:hidden bg-slate-400 p-3 text-white rounded-full text-2xl`}
					onClick={() => setFilter(!filter)}>
					<BiFilterAlt />
				</div>
			</div>

			<div className={`relative md:col-span-1 ${!filter ? "hidden" : "block"} md:block`}>
				{/* <div className="text-[#b2b7b9]">STATUS</div>
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
				<hr className="divide-y my-5" /> */}
				<div className="text-[#b2b7b9]">DIFFICULTY</div>
				<div className="form-control ">
					<label className="cursor-pointer label justify-start gap-2 ">
						<input
							onChange={(e) => setSearch(e.target.value)}
							name="name"
							value=""
							type="radio"
							className="radio dark:radio-warning"
							id="easy"
						/>
						<span className="label-text dark:text-white">All</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
						<input
							onChange={(e) => setSearch(e.target.value)}
							name="name"
							value="Easy"
							type="radio"
							className="radio radio-warning"
							id="easy"
						/>
						<span className="label-text dark:text-white">Easy</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
						<input
							onChange={(e) => setSearch(e.target.value)}
							name="name"
							value="Medium"
							type="radio"
							className="radio radio-warning"
							id="medium"
						/>
						<span className="label-text dark:text-white">Medium</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
						<input
							onChange={(e) => setSearch(e.target.value)}
							name="name"
							id="Hard"
							value="Hard"
							type="radio"
							className="radio radio-warning"
						/>
						<span className="label-text dark:text-white">Hard</span>
					</label>
				</div>
				<div
					className="absolute md:hidden right-10 bottom-7 bg-slate-400 p-3 text-white rounded-full text-2xl "
					onClick={() => setFilter(!filter)}>
					<BiFilterAlt />
				</div>
			</div>
		</div>
	);
};

export default BasicProblem;
