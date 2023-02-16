import React from "react";
import { useLoaderData } from "react-router-dom";
import Compiler from "../../components/shared/Compiler/components/Compiler/Compiler";


const ProblemDetails = () => {
	const data:any= useLoaderData();
	const {
		title,
		task,
		example1,
		example1img,
		example2,
		constraints1,
		constraints2,
		constraints3,
		output,
	}: {
		title: string;
		task: string;
		example1: string;
		example1img: string;
		example2: string;
		constraints1: string;
		constraints2: string;
		constraints3: string;
		output: string;
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

				<p className="mt-4 font-semibold">Output:</p>
				<p className="p-3 bg-[#f7f7f8] dark:text-black">{output}</p>
				{constraints1 && (
					<>
						<p className="mt-4 font-semibold">Constraints:</p>
						<ul>
							<li className="list-disc">{constraints1}</li>
							<li className="list-disc">{constraints2}</li>
							<li className="list-disc">{constraints3}</li>
						</ul>
					</>
				)}
			</div>
			<div className="col-span-3">
				<Compiler resultOutput={output} title={title} />
			</div>
		</div>
	);
};

export default ProblemDetails;
