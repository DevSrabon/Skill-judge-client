import { useQuery } from "@tanstack/react-query";
import React from "react";

const Quiz = () => {
    const { data: quiz }: any = useQuery({
        queryKey: ["allQuiz"],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/allquiz`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("token")}`,
                },
            }).then((res) => res.json()),
    });
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-x-auto lg:ml-64 mb-10 mt-20 px-5">
            <h2 className="text-gray-900 font-medium text-lg mb-3 dark:mt-10 dark:text-white">
                All Quiz's
            </h2>
            <table className="table table-zebra text-gray-500 dark:text-gray-400 w-full">
                <thead>
                    <tr className="text-center">
                        <th>Attempt</th>
                        <th>Quiz Name</th>
                        <th>User Name</th>
                        <th>Email Address</th>
                        <th>Total Mark</th>
                        <th>Score</th>
                        <th>Wrong</th>
                        <th>Accuracy</th>
                    </tr>
                </thead>
                <tbody>
                    {quiz?.map((user: any, i: number) => (
                        <tr className="text-center" key={user?._id}>
                            <th>{i + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.userName}</td>
                            <td>{user?.email}</td>
                            <td>{user?.score + user?.wrong}</td>
                            <td>{user?.score}</td>
                            <td>{user?.wrong}</td>
                            <td>{user?.percentage}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Quiz;
