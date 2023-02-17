import React, { useState } from "react";
import "./Quiz.css";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../contexts/AuthProvider";
import { useNavigate} from "react-router-dom";

const QuizQuesCard = ({ question, name }) => {
	const { user }:any = useAuth();
	const [showResults, setShowResults] = useState<boolean>(false);
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [wrong, setWrong] = useState<number>(0);
	const [isCorrect, setIsCorrect] = useState<string>("");
	const [isActive, setIsActive] = useState<boolean>(false);
	const navigate = useNavigate();

	const optionClick = (e:any): void => {
		setIsActive(true);
		setIsCorrect(e.target.value);
	};

	const optionSubmit = (e: any): void => {
		if (question[currentQuestion].correctAnswer === isCorrect) {
			setScore(score + 1);
		} else {
			setScore(score - 0);
			setWrong(wrong + 1)
		}
		if (currentQuestion + 1 < question.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResults(true);
		}
		setIsActive(false);

	};
	const correctAnswer = Math.round((score * 100) / question.length);
	const restartGame = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowResults(false);
	};
	const handleSave = () => {
		
		fetch(`${process.env.REACT_APP_API_URL}/savedquiz`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				score: score,
				email: user.email,
				wrong: wrong,
				percentage: correctAnswer,
				name,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success("Saved");
					navigate("/");
				} else {
					toast.error(data.message);
				}
			});
	}
	const previous = () => {
		setCurrentQuestion(currentQuestion - 1);
		setScore(score - 1);
	}

	return (
		<div className="quiz-container ">
			{showResults ? (
				<div className="final-results">
					<h2 className="text-3xl mb-3 font-semibold">Final Score: {score}</h2>
					<h2 className="text-xl mb-3 font-semibold">
						Total Questions : {question.length}
					</h2>
					<h2 className="text-xl mb-3 font-semibold">
						Correct Answer : {score}
					</h2>
					<h2 className="text-xl mb-3 font-semibold">Wrong Answer : {wrong}</h2>
					<h2>Percentage of correct answer : {correctAnswer}%</h2>
					<button className="button" onClick={() => restartGame()}>
						Restart game
					</button>
					<button className="button ml-3" onClick={handleSave}>
						Saved
					</button>
				</div>
			) : (
				<div className="question-card">
					<h2 className="text-black font-medium dark:text-white">
						Question: {currentQuestion + 1} out of {question.length}
					</h2>
					<h3 className="question-text dark:text-white">
						{question[currentQuestion].question.replace(/(<([^>]+)>)/gi, "")}
					</h3>

					<ul className="list">
						{question[currentQuestion].options.map(
							(option: string, index: any) => {
								return (
									<>
										<div
											className="list-li dark:bg-cyan-300  dark:text-black"
											key={index}>
											<input
												onClick={optionClick}
												type="radio"
												name={question[currentQuestion].id}
												id={option}
												value={option}
												
											/>{" "}
											<label htmlFor={option}>{option}</label>
										</div>
									</>
								);
							}
						)}
					</ul>
					{currentQuestion > 0 && (
						<button className="button mr-3" onClick={previous}>
							Prev
						</button>
					)}

					<button className="button" disabled={!isActive} onClick={optionSubmit}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default QuizQuesCard;
