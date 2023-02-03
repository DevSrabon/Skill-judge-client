import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { FaUser } from "react-icons/fa";

const QuestionAns = () => {
	// const { user }: any = useContext(AuthContext);
	const { user }: any = useAuth();
	const { register, handleSubmit } = useForm();
	console.log("This is from Q & A : ", user);
	//  const qnaData:any = useLoaderData();
	const [refetch, setRefetch] = useState(false);
	const [qnaData, setqnaData] = useState([]);

	//  const handleSubmit =(e)=>{
	//     e.preventDefault();
	//     const form=e.target.form;
	//     const q=form.question.value
	//     console.log(q);

	//  }

	console.log("All Question : ", qnaData);
	const questionSubmit = (data) => {
		const questionInfo = {
			question: data.question,
			userName: user.displayName,
			usrId: user.uid,
			userImage: user.photoURL,
		};
		// console.log("User INfo question :",questionInfo)
		fetch("http://localhost:5000/send-question", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(questionInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					toast.success(data.message);
					setRefetch(!refetch);
				}
			});
	};

	useEffect(() => {
		fetch("https://skill-judge-server.vercel.app/qna")
			.then((res) => res.json())
			.then((data) => setqnaData(data));
	}, [refetch]);
	return (
		<div className="mx-20 mt-10 ">
			<div className="flex justify-end mb-5">
				<label
					htmlFor="my-modal-3"
					className="rounded-xl p-2 text-white bg-slate-700">
					Add Your Question
				</label>

				<input type="checkbox" id="my-modal-3" className="modal-toggle" />
				<div className="modal ">
					<div className="modal-box relative dark:bg-gray-900 dark:text-gray-100">
						<label
							htmlFor="my-modal-3"
							className="btn btn-sm btn-circle absolute right-2 top-2">
							✕
						</label>
						{/* this is modal form for added question */}
						<form
							className="card m-3 dark:bg-gray-900 dark:text-gray-100"
							onSubmit={handleSubmit(questionSubmit)}>
							<input
								type="text"
								placeholder="Type your question"
								className="input w-full input-bordered"
								{...register("question")}
							/>
							<button type="submit" className="btn btn-accent text-white my-10">
								submit
							</button>
						</form>
					</div>
				</div>
			</div>
			{/* <div>
        <input type="text" placeholder="Type your question" className="input w-full input-bordered"
           onChange={handleSearchChange}
           />
        </div> */}
			<div className=" sm:w-96 mx-auto">
				{qnaData?.map((qna: any) => (
					<div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100  mb-5 md:mb-10">
						<div className="flex items-center justify-between p-3">
							<div className="flex items-center space-x-2">
								<img
									src={qna?.userImage ? qna.userImage : <FaUser />}
									alt=""
									className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
								/>
								<div className="-space-y-1">
									<h2 className="text-sm font-semibold leading-none">
										{qna.userName}
									</h2>
									{/* <span className="inline-block text-xs leading-none dark:text-gray-400">
									Somewhere
								</span> */}
								</div>
							</div>
							<button title="Open options" type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="w-5 h-5 fill-current">
									<path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
									<path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
									<path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
								</svg>
							</button>
						</div>
						<div className="p-3">
							<div className="space-y-3">
								<p className="text-sm">
									<span className="text-base font-semibold">
										{qna.question}
									</span>
								</p>
								<input
									type="text"
									placeholder="Add a comment..."
									className="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionAns;
