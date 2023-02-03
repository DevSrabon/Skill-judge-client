
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../SharedComponent/Spinner/Spinner';
import { Link } from 'react-router-dom';


interface QuestionType  {
	title: string;
	_id: string;
	details: string;
};

const TopQuestions = () => {
	const { data = [], isLoading } = useQuery({
		queryKey: ["questions"],
		queryFn: async () => {
			const res = fetch(`${process.env.REACT_APP_API_URL}/questions`);
			const data = (await res).json();
			return data;
		},
	});
	console.log(data);
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div>
			<h2 className="text-2xl text-pink-800 dark:text-gray-400 md:text-4xl font-bold ">
				Top Problem Solving Question
			</h2>
			<div className="grid grid-cols-1 gap-1 md:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
				{data.map((top: QuestionType) => (
					<div className="hover:-mt-2 md:hover:-mt-5">
						<div className="mt-5 w-full p-5 hover:shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-2xl shadow-xl ">
							<h4 className="text-xl text-pink-800 dark:text-white font-semibold">
								{top?.title}
							</h4>
							<p className="mt-2 md:mt-5 text-black dark:text-gray-400	 text-justify">
								{top?.details.length > 100 ? (
									<>{top?.details.slice(0, 100) + "..."}</>
								) : (
									<>{top?.details}</>
								)}
							</p>
							<div className="text-center md:text-left mt-5">
								<Link to={`questions/${top?._id}`}>
									<button className="btn btn-sm btn-outline border-black dark:border-white dark:text-white text-black">
										See Details
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopQuestions;