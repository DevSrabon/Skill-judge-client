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

interface ILanguage 
{
    id: number;
    name: string;
    label: string;
    value: string;
}
const Compiler = () => {
	const [input, setInput] = useState<string>(``);
	const [output, setOutput] = useState<string>(``);
	const [theme, setTheme] = useState<{ value: string; label: string }>(
		{} as { value: string; label: string }
	);
	const [outputDetails, setOutputDetails] = useState<string>(``);
	const [language, setLanguage] = useState<ILanguage>(languageOptions[0]);
	const [userInput, setUserInput] = useState<string>(``);
	const [processing, setProcessing] = useState<boolean>(false);
	const [testCase, setTestCase] = useState<string>(``);

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
		const response = await fetch(
			"https://judge0-ce.p.rapidapi.com/submissions",
			{
				method: "POST",
				headers: {
					"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
					"x-rapidapi-key":
						`${process.env.REACT_APP_COMPILER_API_KEY}`
,
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
		setProcessing(false);

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
						"x-rapidapi-key":
							`${process.env.REACT_APP_COMPILER_API_KEY}`
,
						"content-type": "application/json",
					},
				});
				jsonGetSolution = await getSolution.json();
				setOutputDetails(jsonGetSolution);
			}
		}
		// alert("🚀 ~ file: Com.js:95 ~ handleSubmit ~ result", atob(jsonGetSolution.stdout))
		if (jsonGetSolution.stdout) {
			const result = atob(jsonGetSolution.stdout);
			setOutput(result);
		}
	};

	const handleThemeChange = (th:any) => {
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
							<button
								onClick={() => setTestCase("hi\n")}
								disabled={!outputDetails || processing}
								className={classnames(
									"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
									!outputDetails ? "opacity-50" : ""
								)}>
								Submit
							</button>
							<button
								
								onClick={handleSubmit}
								disabled={!input || processing}
								className={classnames(
									"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
									!input ? "opacity-50" : ""
								)}>
								{processing ? "Processing..." : "Compile and Execute"}
							</button>
						</div>
					</div>
					{outputDetails && (
						<OutputDetails
							outputDetails={outputDetails}
							processing={processing}
						/>
					)}
					{output && testCase && (
						<>{testCase === output ? <p>Success</p> : <p>Failed</p>}</>
					)}
				</div>
			</div>
		</>
	);
};

export default Compiler;
