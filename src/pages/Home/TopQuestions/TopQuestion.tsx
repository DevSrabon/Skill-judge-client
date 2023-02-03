import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
interface IQues {
        title: string;
        _id: string;
        details: string;
    }
const TopQuestion = () => {
    const questions: any = useLoaderData();
    const question: IQues = questions[0]
    console.log(question)
    return (
			<div className="card w-96 dark:bg-gray-900 dark:text-gray-100 shadow-xl mx-auto my-5 md:my-10">
				<div className="card-body">
					<h2 className="card-title">{question?.title}</h2>
					<p className=" text-justify">{question?.details}</p>
					<div className="card-actions justify-end">
						<Link to="/">
							<button className="btn btn-sm text-white btn-primary">
								Home
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
};

export default TopQuestion;