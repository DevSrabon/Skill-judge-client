import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SingleQAns = ({ qna, user, refetch }) => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { _id, userImage } = qna;
	const { data: comments = [], refetch: qFetch } = useQuery({
		queryKey: ["comments"],
		queryFn: async () => {
			const res = await fetch(
				`${process.env.REACT_APP_API_URL}/allComments?CommentId=${_id}`
			);
			const data = await res.json();
			return data;
		},
    });
    
    const handleReplyDelete = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/deletereply/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                toast.success("Reply deleted successfully");
								qFetch();
            }
        })
    }
	const handleCommentSubmit = (e: any) => {
		e.preventDefault();
		const form = e.target;
		const comments = form.comment.value;

		fetch(`${process.env.REACT_APP_API_URL}/comment`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				comments,
				userEmail: user.email,
				CommentId: _id,
				userPhoto: user.photoURL,
				userName: user.displayName,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				form.reset();
				qFetch();
			});
	};
	const handleDelete = (id) => {
		console.log(id);
		fetch(`${process.env.REACT_APP_API_URL}/deleteqna/${id}`, {
			method: "DELETE",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					setOpen(!isOpen);
					toast.success("Question deleted successfully");
					refetch();
				}
			});
	};
	const handleEdit = (data) => {
		const editData = data.question;
		fetch(`${process.env.REACT_APP_API_URL}/editqna/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ question: editData }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success("Edited");
					refetch();
					reset();
				} else {
					toast.error(data.message);
				}
			});
	};
	const handleOpen = () => {
		setOpen(!isOpen);
	};
	const array = comments.filter((x) => x.CommentId === _id);

	return (
		<div className="rounded-md shadow-md w-full dark:bg-gray-900 dark:text-gray-100  mb-5 md:mb-10">
			<div className="flex items-center justify-between p-3 relative">
				<div className="flex items-center space-x-2">
					<img
						src={userImage ? userImage : <FaUser />}
						alt=""
						className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
					/>
					<div className="-space-y-1">
						<h2 className="text-sm font-semibold leading-none">
							{qna.userName}
						</h2>
					</div>
					<ul
						className={`${
							isOpen ? "block" : "hidden"
						} absolute m-2 p-2 top-8 text-center shadow-md dark:bg-gray-700 dark:text-gray-100 right-5 rounded-md cursor-pointer`}>
						<li onClick={() => handleDelete(_id)}>Delete</li>
						<label htmlFor="edit-modal">
							<li className="pt-2">Edit</li>
						</label>

						<input type="checkbox" id="edit-modal" className="modal-toggle" />
						<div className="modal ">
							<div className="modal-box relative dark:bg-gray-900 dark:text-gray-100">
								<label
									onClick={() => setOpen(!isOpen)}
									htmlFor="edit-modal"
									className="btn btn-sm btn-circle absolute right-2 top-2">
									✕
								</label>
								{/* this is modal form for added question */}
								<form
									className="card mt-3 dark:bg-gray-900 dark:text-gray-100"
									onSubmit={handleSubmit(handleEdit)}>
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
										<button type="submit" onClick={() => setOpen(!isOpen)}>
											<label
												htmlFor="edit-modal"
												className="btn btn-accent text-white my-10">
												submit
											</label>
										</button>
									)}
								</form>
							</div>
						</div>
					</ul>
				</div>
				<button title="Open options" onClick={handleOpen}>
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

			<div className="space-3 px-3 pb-3">
				<p className="text-sm">
					<span className="text-base font-semibold">{qna.question}</span>
				</p>
				<form onSubmit={handleCommentSubmit} className="space-y-3">
					<input
						type="text"
						placeholder="Add a Answer..."
						name="comment"
						className="w-full p-0.5 mt-2 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100"
					/>
					<input
						className="btn btn-outline dark:text-white btn-xs"
						type="submit"
						value="Reply"
					/>
					<>
						{array?.map((comment) => (
							<div className="flex gap-2 items-center" key={comment.CommentId}>
								<div className="flex  gap-2">
									<img
										className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
										src={comment?.userPhoto}
										alt=""
									/>
									<div className="bg-[#f0f2f5] px-2 py-1 rounded-lg text-black">
										<p className="font-semibold">{comment?.userName}</p>
										<p>{comment?.comments}</p>
									</div>
								</div>
								<div onClick={()=>handleReplyDelete(comment?._id)} className=" p-2 rounded-full bg-slate-200 ">
									<MdDelete className="text-info" />
								</div>
							</div>
						))}
					</>
				</form>
			</div>
		</div>
	);
};

export default SingleQAns;
