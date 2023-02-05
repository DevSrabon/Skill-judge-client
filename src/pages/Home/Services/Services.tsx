import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Spinner from "../../../SharedComponent/Spinner/Spinner";
import ErrorSpinner from "../../../SharedComponent/Spinner/ErrorSpinner";

const Services = () => {
	const { data: serviceData = [], isLoading, isError } = useQuery({
		queryKey: ["services"],
		queryFn: async () => {
			const res = fetch(`${process.env.REACT_APP_API_URL}/services`);
			const data = (await res).json();
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
		<section className="py-20 scroll-smooth">
			<div className="container md:px-4 mx-auto">
				<div className="max-w-2xl mx-auto mb-10 text-center">
					<span className="font-bold tracking-wider uppercase dark:text-violet-400">
						Pricing
					</span>
					<h2 className="text-4xl font-bold lg:text-5xl text-pink-800 dark:text-gray-400">
						Services We Provide
					</h2>
				</div>
				<div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-16 my-2 md:my-3 -mx-2  md:-mx-4 ">
					{serviceData.map((service: any) => (
						<div
							key={service._id}
							className="col-span-1 p-6 space-y-6 rounded shadow-xl sm:p-8 hover:shadow-2xl dark:bg-gray-800 dark:text-gray-100 hover:-mt-4 md:hover:-mt-10">
							<div className="space-y-2">
								<h4
									className={`${
										service.price === "Free"
											? "text-pink-800"
											: "text-violet-400"
									} text-2xl font-bold`}>
									{service.title}
								</h4>
								<span className="text-6xl font-bold">$ {service.price}</span>
							</div>
							<p className="my-5 leading-relaxed dark:text-gray-400">
								{service.detail}
							</p>

							<Link
								to={
									service.price === "Free" ? `/free` : `/book/${service._id}`
								}>
								<button
									type="button"
									className={`${
										service.price === "Free" ? "text-white" : "text-violet-400"
									}  inline-block px-5 py-3 mt-3 font-semibold tracking-wider text-center rounded bg-gray-800 dark:bg-violet-400 dark:text-gray-900 `}>
									{service.btn}
								</button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
