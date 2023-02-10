import React from "react";
import { useLoaderData } from "react-router-dom";
import Complier from "../Complier/Complier";

const ProblemDetails = () => {
	const data: any = useLoaderData();
	const {
		title,
		task,
		example1,
		example1img,
		example2,
		constraints1,
		constraints2,
		constraints3,
	} = data[0];
	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5 px-10 dark:text-white dark:bg-gray-800">
			<div className="md:col-span-1 py-5 dark:bg-gray-800">
				<h2 className="text-xl font-bold">{title}</h2>
				<p className="text-justify">{task}</p>
				<p className="mt-4 font-semibold">Example1:</p>
				{example1img && <img className="my-3" src={example1img} alt="" />}
				<pre
					dangerouslySetInnerHTML={{ __html: example1 }}
					className="w-10"></pre>
				<p className="mt-4 font-semibold">Example2:</p>
				<p className="p-3 bg-[#f7f7f8] dark:text-black">{example2}</p>
				<p className="mt-4 font-semibold">Constraints:</p>
				<ul>
					<li className="list-disc">{constraints1}</li>
					<li className="list-disc">{constraints2}</li>
					<li className="list-disc">{constraints3}</li>
				</ul>
			</div>
			<div className="col-span-3">
				<Complier />
			</div>
		</div>
	);
};

export default ProblemDetails;
