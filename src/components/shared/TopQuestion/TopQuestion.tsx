import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchQuestionData from "../../../reactQueryHooks/useFetchQuestionData";
import Spinner from "../../../SharedComponent/Spinner/Spinner";

const TopQuestion = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFetchQuestionData(id!);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let content: any;
    if (isLoading) {
        content = <Spinner />;
    }
    if (error) {
        content = <p>Something Went Wrong!!!</p>;
    }
    if (data?.length === 1 && data) {
        content = (
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div className="lg:mb-0 mb-4">
                    <h2 className="card-title text-lime-400 ">
                        {data[0]?.name}
                    </h2>
                    <p className=" text-justify text-gray-50 mt-4">
                        {data[0]?.question}
                    </p>
                    <h4 className="text-lg mt-3  mb-2">Description:</h4>
                    <p className="text black dark:text-gray-50">
                        {data[0]?.info}
                    </p>
                    <h4 className="text-lg mt-3  mb-2">
                        How To Solve Problem Explain With Step By Step:
                    </h4>
                    <ul className="mt-3 mb-3 bg-slate-50 p-3">
                        <>
                            {data[0]?.pseudocode?.map(
                                (psc: string, index: number) => (
                                    <li key={index} className="text-black">
                                        {index + 1}-{psc}
                                    </li>
                                )
                            )}
                        </>
                    </ul>
                    <h4>Time Complexity: {data[0]?.timeCom}</h4>
                    <h4>Space Complexity: {data[0]?.SpaceCom}</h4>
                </div>
                <div className="h-full flex justify-center items-center">
                    <img src={data[0]?.image} alt={data[0]?.question} />
                </div>
            </div>
        );
    }

    return <div className="container">{content}</div>;
};

export default TopQuestion;
