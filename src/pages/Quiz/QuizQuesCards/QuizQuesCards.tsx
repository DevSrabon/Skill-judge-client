import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuesCard from "./QuizQuesCard";

const QuizQuesCards = () => {
	const data: any = useLoaderData();
	const questions = data[0].questions;
    const name = data[0].name;

	return (
		<div>
			<h2 className="text-3xl dark:text-white font-bold text-center my-3">{name} QUIZ</h2>
			<>
				
					<QuizQuesCard name={name} question={questions} />
				
			</>
		</div>
	);
};

export default QuizQuesCards;
