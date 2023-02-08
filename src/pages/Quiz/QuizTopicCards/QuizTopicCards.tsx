import { useQuery } from "@tanstack/react-query";
import QuizTopicCard from "./QuizTopicCard";
import Spinner from "../../../SharedComponent/Spinner/Spinner";
import ErrorSpinner from "../../../SharedComponent/Spinner/ErrorSpinner";

interface IQuizTopicCard {
	_id: string;
	name: string;
	logo: string;
	total: string;
}
const QuizTopicCards = () => {
	const { data = [], isFetching, isLoading, isError } = useQuery({
		queryKey: ["quiz"],
		queryFn: async () => {
			const res = fetch(`${process.env.REACT_APP_API_URL}/quiz`);
			const data = (await res).json();
			return data;
		},
	});
	if (isLoading) {
		return <Spinner />;
	}
	if (isFetching) {
		return <Spinner />;
	}
	if (isError) {
		return <ErrorSpinner/>;
	}
	return (
		<div className="w-[90%] mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 my-5">
			{data.map((quiz: IQuizTopicCard) => (
				<QuizTopicCard key={quiz._id} quiz={quiz} />
			))}
		</div>
	);
};

export default QuizTopicCards;
