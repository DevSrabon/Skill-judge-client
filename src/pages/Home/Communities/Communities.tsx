import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import ErrorSpinner from "../../../SharedComponent/Spinner/ErrorSpinner";
import Spinner from "../../../SharedComponent/Spinner/Spinner";

const Communities = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["communities"],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}/user/communities`
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
        <section className="container">
            <div className="space-y-10 w-8/12 text-center mx-auto">
                <h2 className="text-6xl font-semibold dark:font-normal text-black dark:text-white">
                    An occupied Skill Judge Platform community
                </h2>
                <p className="text-xl font-light text-black dark:text-white">
                    Skill Judge is a collective effort by its users. They are
                    creators—authoring problem solving platform to teach various
                    techniques,problem solving with solutions that enlighten
                    others, and commenting with constructive feedback.
                </p>
            </div>
            <div className="rounded-lg mt-14 bg-stone-800 dark:bg-red-400 shadow-xl grid grid-cols-3">
                <div className="flex py-[70px] space-y-5 justify-center items-center flex-col">
                    <h3 className="text-7xl font-semibold text-white">
                        <CountUp end={data && data?.users} start={0} />
                        <span>+</span>
                    </h3>
                    <p className="text-md font-normal text-white ">
                        Sign Up created by our community
                    </p>
                </div>
                <div className="flex py-[70px] space-y-5 justify-center items-center flex-col">
                    <h3 className="text-7xl font-semibold text-white">
                        <CountUp end={data && data?.problemSolves} start={0} />
                        <span>+</span>
                    </h3>
                    <p className="text-md font-normal text-white ">
                        Problem solving completed
                    </p>
                </div>
                <div className="flex py-[70px] space-y-5 justify-center items-center flex-col">
                    <h3 className="text-7xl font-semibold text-white">
                        <CountUp end={data && data?.problems} start={0} />
                        <span>+</span>
                    </h3>
                    <p className="text-md font-normal text-white ">
                        Community members added
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Communities;
