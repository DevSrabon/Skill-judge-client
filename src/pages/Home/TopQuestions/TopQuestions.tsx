import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../SharedComponent/Spinner/Spinner";

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
    const { data = [], isLoading } = useQuery({
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
    return (
        <div>
            <h2 className="text-2xl text-orange-400 md:text-4xl font-bold ">
                Top Problem Solving Question
            </h2>
            <div className="grid grid-cols-1 gap-1 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {data.map((top: QuestionType) => (
                    <>
                        <div className="mt-5 w-full p-5 bg-slate-400 rounded-lg text-white shadow-lg">
                            <h4 className="text-xl font-semibold">
                                {top?.name}
                            </h4>
                            <p className="mt-2 md:mt-5 text-justify">
                                {top?.question.length > 200 ? (
                                    <>{top?.question.slice(0, 200) + "....."}</>
                                ) : (
                                    <>{top?.question}</>
                                )}
                            </p>
                            <div className="text-center md:text-left mt-5">
                                <Link to={`top-questions/${top?._id}`}>
                                    <button className="btn btn-sm btn-outline border-slate-100 text-white">
                                        See Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default TopQuestions;
