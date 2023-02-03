import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/AuthProvider";
import SingleQAns from "./SingleQAns";
import { useQuery } from "@tanstack/react-query";

const QuestionAns = () => {
	const { user }: any = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();


	const questionSubmit = (data) => {
		const questionInfo = {
			question: data.question,
			userName: user.displayName,
			usrId: user.uid,
			userImage: user.photoURL,
		};

		fetch(`${process.env.REACT_APP_API_URL}/send-question`, {
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
          refetch();
					reset();
				}
			});
	};


  	const { data: qnaData = [], refetch } = useQuery({
			queryKey: ["qna"],
			queryFn: async () => {
				const res = await fetch(
					`${process.env.REACT_APP_API_URL}/qna`
				);
				const data = await res.json();
				return data;
			},
		});
	return (
		<div className="mx-5 md:mx-20 mt-10 ">
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
							className="card mt-3 dark:bg-gray-900 dark:text-gray-100"
							onSubmit={handleSubmit(questionSubmit)}>
							<input
								type="text"
								placeholder="Type your question"
								className="input w-full input-bordered mt-4 text-black"
								{...register("question", {
									required: "Question is required",
									minLength: {
										value: 6,
										message: "Question must be six character or longer",
									},
								})}
							/>
							{errors.question ? (
								<p className="text-red-600">
									Question must be six character or longer
								</p>
							) : (
								<button type="submit">
									<label
										htmlFor="my-modal-3"
										className="btn btn-accent text-white my-10">
										submit
									</label>
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
			{/* <div>
        <input type="text" placeholder="Type your question" className="input w-full input-bordered"
           onChange={handleSearchChange}
           />
        </div> */}
			<div className=" w-full max-w-2xl mx-auto">
				{qnaData?.map((qna: any) => (
					<SingleQAns key={qna._id} qna={qna} user={user} refetch={refetch} />
				))}
			</div>
		</div>
	);
};

export default QuestionAns;
