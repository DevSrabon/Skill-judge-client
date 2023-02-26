import React, { useEffect, useState } from "react";
import { languageOptions } from "../../constants/languageOptions";
import { defineTheme } from "../../lib/defineTheme";
import { classnames } from "../../utils/general";
import CodeEditorWindow from "../CodeEditorWindow";
import CustomInput from "../CustomInput";
import LanguagesDropdown from "../LanguagesDropdown";
import OutputDetails from "../OutputDetails";
import OutputWindow from "../OutputWindow";
import ThemeDropdown from "../ThemeDropdown";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../../../contexts/AuthProvider";
import Confetti from "react-confetti";
import {
	useWindowSize,

} from '@react-hook/window-size';
interface ILanguage {
	id: number;
	name: string;
	label: string;
	value: string;
}
interface ITheme {
	value: string;
	label: string;
}
const Compiler = ({ resultOutput }: any) => {
	const { output, output1, output2, title, valueDefault } = resultOutput;
	const [input, setInput] = useState<string>(``);
	const [theme, setTheme] = useState<ITheme>({} as ITheme);
	const [outputDetails, setOutputDetails] = useState<string>(``);
	const [language, setLanguage] = useState<ILanguage>(languageOptions[0]);
	const [userInput, setUserInput] = useState<string>(``);
	const [result, setResult] = useState<string>("");
	const [processing, setProcessing] = useState<boolean>(false);
	const [isCorrect, setIsCorrect] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);
	const [confetti, setConfetti] = useState<boolean>(false);

	const { user }: any = useAuth();
	const onSelectChange = (sl: ILanguage) => {
		console.log("selected Option...", sl);
		setLanguage(sl);
	};
	const onChange = (action: string, data: string) => {
		switch (action) {
			case "code": {
				setInput(data);
				break;
			}
			default: {
				console.warn("case not handled!", action, data);
			}
		}
	};

	const handleSubmit = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setProcessing(true);
		setOutputDetails(``);
		setShow(false);

		const response = await fetch(
			"https://judge0-ce.p.rapidapi.com/submissions",
			{
				method: "POST",
				headers: {
					"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
					"x-rapidapi-key": `${process.env.REACT_APP_COMPILER_API_KEY}`,
					"content-type": "application/json",
					accept: "application/json",
				},
				body: JSON.stringify({
					source_code: input,
					stdin: userInput,
					language_id: language.id,
				}),
			}
		);

		const jsonResponse = await response.json();

		let jsonGetSolution: any = {
			status: { description: "Queue" },
			stderr: null,
			compile_output: null,
		};

		while (
			jsonGetSolution.status.description !== "Accepted" &&
			jsonGetSolution.stderr == null &&
			jsonGetSolution.compile_output == null
		) {
			if (jsonResponse.token) {
				let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

				const getSolution = await fetch(url, {
					method: "GET",
					headers: {
						"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
						"x-rapidapi-key": `${process.env.REACT_APP_COMPILER_API_KEY}`,
						"content-type": "application/json",
					},
				});
				setProcessing(false);
				jsonGetSolution = await getSolution.json();
				setOutputDetails(jsonGetSolution);
				toast.success("Compile Successful");
				if (jsonGetSolution.stdout) {
					setResult(atob(jsonGetSolution.stdout).replace(/\n/g, ""));
				}
			}
			if (
				JSON.stringify(atob(jsonGetSolution.stdout).replace(/\n/g, "")) ===
				JSON.stringify(output || output1 || output2)
			) {
				setIsCorrect(true);
			}
		}
	};
	const startIt = () => {
		setTimeout(function () {
			setConfetti(false);
		}, 7000);
	};
	const handleResultSubmit = () => {
		console.log(JSON.stringify(result) === JSON.stringify(resultOutput));
		fetch(`${process.env.REACT_APP_API_URL}/compileResult`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify({
				correct: isCorrect,
				email: user?.email,
				title: title,
				userName: user?.displayName,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success("Saved");
					setShow(true);
					if (
						JSON.stringify(result) ===
						JSON.stringify(output)
					) {
						startIt();
						setConfetti(true);
					}
					if (
						JSON.stringify(result) ===
						JSON.stringify(output1)
					) {
						startIt();
						setConfetti(true);
					}
					if (
						JSON.stringify(result) ===
						JSON.stringify(output2)
					) {
						startIt();
						setConfetti(true);
					}
				} else {
					toast.error(data.message);
				}
			});
	};
	const [width, height] = useWindowSize();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleThemeChange = (th: any) => {
		console.log("theme...", th);
		const theme = th;

		if (["light", "vs-dark"].includes(theme.value)) {
			setTheme(theme);
		} else {
			defineTheme(theme.value).then((_) => setTheme(theme));
		}
	};
	useEffect(() => {
		defineTheme("oceanic-next").then((_) =>
			setTheme({ value: "oceanic-next", label: "Oceanic Next" })
		);
	}, []);

	return (
		<>
			{confetti && (
				<Confetti width={width} height={height} tweenDuration={5000} />
			)}

			<div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
			<div className="flex flex-row">
				<div className="px-4 py-2">
					<LanguagesDropdown onSelectChange={onSelectChange} />
				</div>
				<div className="px-4 py-2">
					<ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
				</div>
			</div>
			<div className="flex flex-row space-x-4 items-start px-4 py-4">
				<div className="flex flex-col w-full h-full justify-start items-end">
					<CodeEditorWindow
						valueDefault={valueDefault}
						code={input}
						onChange={onChange}
						language={language?.value}
						theme={theme.value}
					/>
				</div>

				<div className="flex flex-shrink-0 w-[30%] flex-col">
					<OutputWindow outputDetails={outputDetails} />
					<div className="flex flex-col items-end">
						<CustomInput
							customInput={userInput}
							setCustomInput={setUserInput}
						/>

						<div className="flex gap-2">
							{(resultOutput?.length > 0) ? (
								<button
									onClick={handleResultSubmit}
									disabled={!outputDetails || processing || show}
									className={classnames(
										"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white dark:text-black flex-shrink-0",
										!outputDetails ? "opacity-50" : ""
									)}>
									Submit
								</button>
							):null}
							<button
								onClick={handleSubmit}
								disabled={!input || processing}
								className={classnames(
									"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 dark:text-black bg-white flex-shrink-0",
									!input ? "opacity-50" : ""
								)}>
								{processing ? "Processing..." : "Compile and Execute"}
							</button>
						</div>
					</div>
					<div className="flex justify-between">
						{outputDetails && (
							<OutputDetails
								outputDetails={outputDetails}
								processing={processing}
							/>
						)}
						<div className="mt-4">
							{show && (
								<>
									{isCorrect ? (
										<p className="text-sm">
											<span className="text-lg font-semibold px-3 py-2 rounded-md bg-green-400 text-white block mb-2">
												Congratulation!!
											</span>
											Result:{" "}
											<span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
												Passed
											</span>
										</p>
									) : (
										<p className="text-sm">
											<span className="text-lg text-white font-semibold px-3 py-2 rounded-md bg-red-700 block mb-2">
												Sorry!!😥😥😥 <br /> You Have Failed!
											</span>
											{/* Result:{" "}
											<span className="font-semibold px-2 py-1 rounded-md bg-red-700 text-white">
												Failed
											</span> */}
										</p>
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Compiler;
