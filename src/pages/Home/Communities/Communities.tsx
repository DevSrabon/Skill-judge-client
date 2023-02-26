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
			<section className="container hero-section">
				<div className=" space-y-10 w-8/12 text-center mx-auto">
					<div className="relative">
						<div className={"dots"}>
							<span></span>
						</div>
						<h2 className=" text-center text-4xl md:text-6xl dark:text-white font-extrabold mb-3">
							An occupied Skill Judge Platform community
						</h2>
						<div className=" hidden md:block md:absolute md:right-[-93px] lg:right-[-6px]">
							<img
								src="https://t.commonsupport.com/driveto/images/resource/title-pattern-1.svg"
								alt=""
								className="w-44 md:w-64"
							/>
						</div>
					</div>
					{/* <h2 className="text-6xl font-semibold dark:font-normal text-black dark:text-white">
						An occupied Skill Judge Platform community
					</h2> */}
					<p className="text-xl mt-2 font-light text-black dark:text-white">
						Skill Judge is a collective effort by its users. They are
						creators—authoring problem solving platform to teach various
						techniques,problem solving with solutions that enlighten others, and
						commenting with constructive feedback.
					</p>
				</div>
				<div className="rounded-lg mt-14  bg-stone-800 dark:bg-gray-900 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					<div className="flex py-[70px] space-y-5 space-x-5 justify-center items-center flex-col">
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
