import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../SharedComponent/Spinner/Spinner";
import ErrorSpinner from "../../../SharedComponent/Spinner/ErrorSpinner";

interface QuestionType {
    _id: string;
    name: string;
    question: string;
    info: string;
    timeCom: string;
    SpaceCom: string;
    pseudocode: string[];
    image: string;
}

const TopQuestions = () => {
    const { data = [], isLoading, isError } = useQuery({
        queryKey: ["top-questions"],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}/top-questions`
            );
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <ErrorSpinner />;
    }
    return (
			<div>
				<h2 className="text-2xl text-center text-pink-800 dark:text-gray-400 md:text-4xl font-bold ">
					Top Problem Solving Question
				</h2>
				<div className="grid grid-cols-1 gap-1 md:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
					{data.map((top: QuestionType) => (
						<div className="hover:-mt-2 md:hover:-mt-5 transition-all duration-300 ease-in-out">
							<div className="mt-3 md:mt-10 w-full p-5 hover:shadow-2xl dark:bg-gray-900 dark:text-gray-100 rounded-2xl shadow-xl ">
								<h4 className="text-xl text-pink-800 dark:text-white font-semibold">
									{top?.name}
								</h4>
								<p className="mt-2 md:mt-5 text-black dark:text-gray-400	 text-justify">
									{top?.question.length > 100 ? (
										<>{top?.question.slice(0, 100) + "..."}</>
									) : (
										<>{top?.question}</>
									)}
								</p>
								<div className="text-center md:text-left mt-5">
									<Link to={`top-questions/${top?._id}`}>
										<button className="btn btn-sm btn-outline border-black dark:border-white dark:text-white text-black">
											See Details
										</button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);

};

export default TopQuestions;
