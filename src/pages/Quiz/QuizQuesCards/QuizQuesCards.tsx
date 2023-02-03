import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuesCard from "./QuizQuesCard";

interface IQuestion {
	_id: string;
	options: string[];
	question: string;
	correctAnswer: string;
}
const QuizQuesCards = () => {
	const data: any = useLoaderData();
	const questions = data[0].questions;
    const name = data[0].name;
    console.log(data)

	return (
		<div>
			<h2 className="text-3xl dark:text-white font-bold text-center my-5">{name} QUIZ</h2>
			<>
				(
					<QuizQuesCard question={questions} />
				)
			</>
		</div>
	);
};

export default QuizQuesCards;
