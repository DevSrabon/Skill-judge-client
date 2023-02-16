import { useQuery } from "@tanstack/react-query";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import Spinner from "../../SharedComponent/Spinner/Spinner";

const BasicProblem = () => {
	const [search, setSearch]=useState("")
	const { isLoading, error, refetch, data }: any = useQuery({
		queryKey: ["user"],
		queryFn: () =>
			fetch(`${process.env.REACT_APP_API_URL}/problems`, {
				headers: {
					// authorization: `bearer ${localStorage.getItem('token')}`
				},
			}).then((res) => res.json()),
	});
		 const handleChange = (e) => {
				// e.preventDefault();
				setSearch(e.target.value);
	};

	if (isLoading) {
		return <Spinner/>
	}
	return (
		<div className="bg-[#f3f7f7] md:pl-16 py-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-[100vh]">
			<div className="flex flex-col divide-y md:col-span-2 lg:col-span-3">
				{data
					?.filter((item: any) => {
						return search?.toLowerCase() === ""
							? item
							: item?.difficulty?.includes(search);
					})
					.map((problem: any, i:number) => (
						<div key={i+1} className=" flex flex-col gap-3 md:flex-row justify-between items-center mx-4 py-5 px-5 bg-white shadow-lg ">
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
			</div>

			<div className="md:col-span-1">
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
				<div className="form-control">
					<label className="cursor-pointer label justify-start gap-2">
					<input
						onChange={handleChange}
						name="name"
						value=""
						type="radio"
						className="radio"
						id="easy"
					/>
						<span className="label-text">All</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
					<input
						onChange={handleChange}
						name="name"
						value="Easy"
						type="radio"
						className="radio"
						id="easy"
					/>
						<span className="label-text">Easy</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
					<input
						onChange={handleChange}
						name="name"
						value="Medium"
						type="radio"
						className="radio"
						id="medium"
					/>
						<span className="label-text">Medium</span>
					</label>
					<label className="cursor-pointer label justify-start gap-2">
					<input
						onChange={handleChange}
						name="name"
						id="Hard"
						value="Hard"
						type="radio"
						className="radio"
					/>
						<span className="label-text">Hard</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default BasicProblem;
