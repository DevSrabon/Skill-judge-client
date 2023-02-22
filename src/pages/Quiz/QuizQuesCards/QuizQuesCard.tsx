import React, { useState } from "react";
import "./Quiz.css";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../contexts/AuthProvider";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const QuizQuesCard = ({ question, name }) => {
	const { user }:any = useAuth();
	const [showResults, setShowResults] = useState<boolean>(false);
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [wrong, setWrong] = useState<number>(0);
	const [isCorrect, setIsCorrect] = useState<string>("");
	const [isActive, setIsActive] = useState<boolean>(false);

		const progress = Math.round(
			((currentQuestion + 1) / question.length) * 100
		);
		const correctAnswer = Math.round((score * 100) / question.length);
	const data = {
		labels: ["Correct", "Wrong"],
		datasets: [
			{
				label: "# of Votes",
				data: [score, wrong],
				backgroundColor: ["rgb(230, 164, 129)", "rgb(235, 91, 14)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
				ShadowRoot:Pie
			},
		],
	};
	const percentage = {
		labels: ["Correct%", "Wrong%"],
		datasets: [
			{
				label: "# of Votes",
				data: [100-correctAnswer, correctAnswer],
				backgroundColor: ["rgb(230, 164, 129)", "rgb(235, 91, 14)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
				ShadowRoot:Pie
			},
		],
	};
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
				authorization: `bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify({
				score: score,
				email: user.email,
				userName: user.displayName,
				wrong: wrong,
				percentage: correctAnswer,
				name,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success("Saved");
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
				<div className=" flex justify-evenly items-center">
					<div>
						{correctAnswer > 59 ? (
							<p className="p-3 rounded-lg bg-info my-2 text-white ">
								"Congratulations! You earn a batch!"
							</p>
						) : null}
						<h2 className="text-3xl mb-3 font-semibold p-4 bg-info rounded text-white">
							Your Score is {score}
						</h2>

						<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
							<table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
								<thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
									<tr>
										<th scope="col" className="px-6 py-3">
											Title
										</th>
										<th scope="col" className="px-6 py-3">
											Result
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-blue-500 border-b border-blue-400">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
											Final Score
										</th>
										<td className="px-6 py-4">{score}</td>
									</tr>
									<tr className="bg-blue-500 border-b border-blue-400">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
											Total Questions
										</th>
										<td className="px-6 py-4">{question.length}</td>
									</tr>
									<tr className="bg-blue-500 border-b border-blue-400">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
											Correct Answer
										</th>
										<td className="px-6 py-4">{score}</td>
									</tr>
									<tr className="bg-blue-500 border-b border-blue-400">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
											Wrong Answer
										</th>
										<td className="px-6 py-4">{wrong}</td>
									</tr>
									<tr className="bg-blue-500 border-b border-blue-400">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
											Percentage of correct answer
										</th>
										<td className="px-6 py-4">{correctAnswer}%</td>
									</tr>
								</tbody>
							</table>
						</div>
						<button className="button" onClick={() => restartGame()}>
							Restart game
						</button>
					</div>
					<div className="flex justify-between">
						<div className="grid justify-center my-10 ">
							<Pie data={data} />
						</div>
						<div className="grid justify-center my-10 ">
							<Pie data={percentage} />
						</div>
					</div>
				</div>
			) : (
				<div className="question-card">
					<div className="w-full bg-neutral-200 dark:bg-neutral-600">
						<div
							className="bg-primary rounded-sm p-0.5 tex t-center text-xs font-medium leading-none text-primary-100"
							style={{ width: `${progress}%`, minWidth: "1.4rem" }}>
							{progress}%
						</div>
					</div>
					<h2 className="text-black font-medium dark:text-white">
						Question: {currentQuestion + 1} out of {question.length}
					</h2>
					<h3 className="question-text dark:text-white">
						{question[currentQuestion].question.replace(/(<([^>]+)>)/gi, "")}
					</h3>

					<ul className="list">
						{question[currentQuestion].options.map(
							(option: string, index: number) => {
								return (
									<>
										<label htmlFor={option}>
											<div
												className="list-li dark:bg-cyan-300  dark:text-black"
												tabIndex={index + 1}
												key={index}>
												{option}
												<input
													onClick={optionClick}
													className={"hidden"}
													type="button"
													name={question[currentQuestion].id}
													id={option}
													value={option}
												/>
											</div>
										</label>
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

					{currentQuestion !== question.length - 1 && (
						<button
							className="button"
							disabled={!isActive}
							onClick={optionSubmit}>
							Next
						</button>
					)}
					{currentQuestion === question.length - 1 && (
						<button
							className="button"
							disabled={!isActive}
							onClick={(e) => {
								optionSubmit(e);
								handleSave();
							}}>
							Submit
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default QuizQuesCard;
