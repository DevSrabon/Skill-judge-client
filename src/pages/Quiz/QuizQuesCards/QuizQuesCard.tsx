import React, { useState } from "react";
import "./Quiz.css";
import { toast } from "react-hot-toast";

const QuizQuesCard = ({ question }) => {
	const [showResults, setShowResults] = useState<boolean>(false);
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [isCorrect, setIsCorrect] = useState<string>("");
	const [isActive, setIsActive] = useState<boolean>(true);

	const optionClick = (e:any): void => {
		setIsActive(false);
		setIsCorrect(e.target.innerText);
	};

	const optionSubmit = (e: any): void => {
		if (question[currentQuestion].correctAnswer === isCorrect) {
			setScore(score + 1);
			toast.success("Right answer");
		} else {
			setScore(score - 1);
			toast.error("Wrong answer");
		}
		if (currentQuestion + 1 < question.length) {
			setCurrentQuestion(currentQuestion + 1);
			setIsActive(!isActive)
		} else {
			setShowResults(true);
		}
	};
	const correctAnswer = Math.round((score * 100) / question.length);
	const restartGame = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowResults(false);
	};

	return (
		<div className="quiz-container">
			<h2 className="text-3xl mb-3 font-semibold">Score: {score}</h2>

			{showResults ? (
				<div className="final-results">
					<h1>Final Results</h1>
					<h2>
						{score} out of {question.length} correct - ({correctAnswer}%)
					</h2>
					<button className="button" onClick={() => restartGame()}>
						Restart game
					</button>
				</div>
			) : (
				<div className="question-card">
					<h2>
						Question: {currentQuestion + 1} out of {question.length}
					</h2>
					<h3 className="question-text">
						{question[currentQuestion].question}
					</h3>

					<ul className="list">
						{question[currentQuestion].options.map((option: string) => {
							console.log(option);
							return (
								<li
									className={`${
										isActive ? "list-li" : "list-click"
									} cursor-pointer`}
									key={option}
									onClick={optionClick}>
									{option}
								</li>
							);
						})}
					</ul>
					<button className="button" disabled={isActive} onClick={optionSubmit}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default QuizQuesCard;
