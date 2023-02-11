import { useState } from "react";
import Editor from "@monaco-editor/react";
import ComNav from "./ComNav";
import axios from "axios";
import "./css/ComplierCss.css";
import Spinner from "../../SharedComponent/Spinner/Spinner";

function Complier() {
	// State variable to set users source code
	const [userCode, setUserCode] = useState(``);

	// State variable to set editors default language
	const [userLang, setUserLang] = useState<string>("python");

	// State variable to set editors default theme
	const [userTheme, setUserTheme] = useState<string>("vs-dark");

	// State variable to set editors default font size
	const [fontSize, setFontSize] = useState<number>(20);

	// State variable to set users input
	const [userInput, setUserInput] = useState<string>("");

	// State variable to set users output
	const [userOutput, setUserOutput] = useState<string>("");
	console.log(userInput);
	// Loading state variable to show spinner
	// while fetching data
	const [loading, setLoading] = useState<boolean>(false);

	const options = {
		fontSize: fontSize,
	};

	// Function to call the compile endpoint
	const compile = () => {
		setLoading(true);
		if (userCode === ``) {
			return;
		}

		// Post request to compile endpoint
		axios
			.post(`${process.env.REACT_APP_API_URL}/compiler`, {
				code: userCode,
				language: userLang,
			})
			.then((res) => {
				setUserOutput(res.data);
			})
			.then(() => {
				setLoading(false);
			});
	};

	// Function to clear the output screen
	const clearOutput = () => {
		setUserOutput("");
	};

	return (
		<div className="Complier mb-10 mx-5 gap-10 md:mx-10 divided-y">
			<ComNav
				userLang={userLang}
				setUserLang={setUserLang}
				userTheme={userTheme}
				setUserTheme={setUserTheme}
				fontSize={fontSize}
				setFontSize={setFontSize}
			/>
			<div className="grid grid-cols-1 lg:grid-cols-3">
				<div className="left-container lg:col-span-2">
					<Editor
						options={options}
						height="80vh"
						width="100%"
						theme={userTheme}
						language={userLang}
						defaultLanguage="python"
						defaultValue="# Enter your code here"
						onChange={(value: any) => {
							setUserCode(value);
						}}
					/>
					<button className="run-btn" onClick={() => compile()}>
						Run
					</button>
				</div>
				<div className={`right-container ${userTheme} lg:col-span-1`}>
					<h4 className="">Output:</h4>
					{loading ? (
						<div className="spinner-box">
							<Spinner />
						</div>
					) : (
						<div className={`output-box ${userTheme}`}>
							<pre>{userOutput}</pre>
							<button
								onClick={() => {
									clearOutput();
								}}
								className="clear-btn">
								Clear
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Complier;
