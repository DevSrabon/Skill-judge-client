import React from "react";
import { useLoaderData } from "react-router-dom";
import Compiler from "../../components/shared/Compiler/components/Compiler/Compiler";

const ProblemDetails = () => {
	const data: any = useLoaderData();
	console.log(data);
	const {
		title,
		task,
		example1,
		example1img,
		titleDetails,
		image,
		example2,
		constraints1,
		constraints2,
		constraints3,
		output,
		output1,
		output2,
	}: {
		title: string;
		task: string;
		example1: string;
		example1img: string;
		titleDetails: string;
		image: string;
		example2: string;
		constraints1: string;
		constraints2: string;
		constraints3: string;
		output: string;
		output1: string;
		output2: string;
		valueDefault: string;
	} = data[0];

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-5 gap-5  px-2 md:px-5 dark:text-white dark:bg-gray-800">
			<div className="md:col-span-1 py-5 dark:bg-gray-800">
				<h2 className="text-xl font-bold">{titleDetails}</h2>
				<p className="text-justify">{task}</p>
				<p className="mt-4 font-semibold">Example1:</p>
				{example1img ? (
					<img className="my-3" src={example1img} alt="" />
				) : (
					<img className="my-3" src={image} alt="" />
				)}
				<pre
					dangerouslySetInnerHTML={{ __html: example1 }}
					className="w-10"></pre>
				<p className="mt-4 font-semibold">Output1:</p>
				<p className="p-3 bg-[#f7f7f8] dark:text-black">{output || output1}</p>
				{example2 && (
					<>
						<p className="mt-4 font-semibold">Example2:</p>
						<p className="p-3 bg-[#f7f7f8] dark:text-black">{example2}</p>
					</>
				)}

				{output2 && (
					<>
						<p className="mt-4 font-semibold">Output2:</p>
						<p className="p-3 bg-[#f7f7f8] dark:text-black">{output2}</p>
					</>
				)}
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
			<div className="col-span-4">
				<Compiler resultOutput={data[0]} />
			</div>
		</div>
	);
};

export default ProblemDetails;
