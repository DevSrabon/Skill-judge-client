import React from "react";

const Form = () => {
	return (
		<div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-16 lg:20 mb-5 md:mb-10">
			<div className="lg:col-span-3">
				<img
					src="https://i.ibb.co/5v0d4zG/6230545-1.png"
					className="w-full"
					alt=""
				/>
			</div>
			<div className="lg:col-span-2">
				<div
					className="flex flex-col gap-5 justify-center items-center"
					id="contact">
					<h2 className="text-4xl font-bold text-pink-800 dark:text-gray-400">
						Contact With us
					</h2>
					<form
						className="flex flex-col gap-5  w-full"
						action="https://formsubmit.co/et.srabon@gmail.com"
						method="POST">
						<input
							type="text"
							name="name"
							className="input input-bordered w-full "
							placeholder="Your Name"
							required
						/>
						<input
							type="email"
							name="email"
							className="input input-bordered w-full "
							placeholder="Your Email"
							required
						/>
						<textarea
							name="message"
							className="textarea textarea-secondary"
							placeholder="Message"
							required></textarea>
						<button className="btn btn-outline dark:text-white" type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
