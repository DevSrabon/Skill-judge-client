import React from "react";
import { QuizTopicCardType } from "../../../types/types";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/shared/PrimaryButton/PrimaryButton";
interface Props {
	quiz: QuizTopicCardType;
}
const QuizTopicCard: React.FC<Props> = ({ quiz }) => {

	return (
		<div className="max-w-xs p-6 rounded-md shadow-lg dark:bg-gray-900 dark:text-gray-50">
			<img
				src={quiz.logo}
				alt=""
				className="object-cover object-center w-full rounded-md h-72 bg-gray-100"
			/>
			<div className="mt-6 mb-2 flex justify-between items-center">
				<h2 className="text-xl font-semibold tracking-wide">{quiz.name}</h2>
				<Link to={`/quiz/${quiz.name}`}>
					<PrimaryButton>Start Quiz</PrimaryButton>
				</Link>
			</div>
		</div>
	);
};

export default QuizTopicCard;
