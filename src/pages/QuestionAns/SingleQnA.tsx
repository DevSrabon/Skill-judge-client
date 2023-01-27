import { useLoaderData } from "react-router-dom";

const SingleQnA = () => {
	const singleQnaData: any = useLoaderData();

	return (
		<div>
			<div className="mx-20 ">
				{singleQnaData.map((qna: any) => (
					<div className="shadow-lg flex mb-3 p-3 rounded-md justify-between">
						<div className="flex gap-3">
							<img
								className="rounded-full w-10 h-10"
								src="https://placeimg.com/80/80/people"
								alt=""
							/>
							<div>
								<h1 className="font-bold">{qna.name}</h1>
								<h2>{qna.question}</h2>
							</div>
						</div>
					</div>
				))}
				<h1 className="text-center text-3xl">ANS</h1>
				{singleQnaData[0].comment.map((qna: any) => (
					<div className="shadow-lg flex mb-3 p-3 rounded-md justify-between">
						<div className="flex gap-3">
							<img
								className="rounded-full w-10 h-10"
								src="https://placeimg.com/80/80/people"
								alt=""
							/>
							<div>
								<h1 className="font-bold">{qna.name}</h1>
								<h2>{qna.ans}</h2>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SingleQnA;
