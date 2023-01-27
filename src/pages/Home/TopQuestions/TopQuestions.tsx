
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
		queryKey: ["topquestions"],
		queryFn: async () => {
			const res = fetch(`${process.env.REACT_APP_API_URL}/topquestions`);
			const data = (await res).json();
			return data;
		},
	});
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div>
			<h2 className="text-2xl text-orange-400 md:text-4xl font-bold ">
				Top Problem Solving Question
			</h2>
			<div className="grid grid-cols-1 gap-1 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
				{data.map((top: QuestionType) => (
					<>
						<div className="mt-5 w-full p-5 bg-slate-400 rounded-lg text-white shadow-lg">
							<h4 className="text-xl font-semibold">{top?.title}</h4>
							<p className="mt-2 md:mt-5 text-justify">
								{top?.details.length > 50 ? (
									<>{top?.details.slice(0, 50) + "....."}</>
								) : (
									<>{top?.details}</>
								)}
							</p>
							<div className="text-center md:text-left mt-5">
								<Link to={`topquestions/${top?._id}`}>
									<button className="btn btn-sm btn-outline border-slate-100 text-white">
										See Details
									</button>
								</Link>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default TopQuestions;