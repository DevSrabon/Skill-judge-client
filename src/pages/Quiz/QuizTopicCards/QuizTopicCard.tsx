import React from "react";
import { QuizTopicCardType } from "../../../types/types";
import { Link } from "react-router-dom";
import Spinner from "../../../SharedComponent/Spinner/Spinner";
interface Props {
	quiz: QuizTopicCardType;
	isFetching: any;
}
const QuizTopicCard: React.FC<Props> = ({ quiz, isFetching }) => {
	if (isFetching) {
		return <Spinner />;
	}
	return (
		<div className="max-w-xs p-6 rounded-md shadow-lg dark:bg-gray-900 dark:text-gray-50">
			<img
				src={quiz.logo}
				alt=""
				className="object-cover object-center w-full rounded-md h-72 bg-[#f0db4f]"
			/>
			<div className="mt-6 mb-2 flex justify-between items-center">
				<h2 className="text-xl font-semibold tracking-wide">{quiz.name}</h2>
				<Link to={`/quiz/${quiz.name}`}>
					<button className="btn">Start Quiz</button>
				</Link>
			</div>
		</div>
	);
};

export default QuizTopicCard;
