import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../SharedComponent/Spinner/Spinner";

const Services = () => {
const { data: serviceData = [], isLoading } = useQuery({
	queryKey: ["services"],
	queryFn: async () => {
		const res = fetch(`${process.env.REACT_APP_API_URL}/services`);
		const data = (await res).json();
		return data;
	},
});
console.log(serviceData)
if (isLoading) {
	return <Spinner />;
}
	
	return (
		<section className="py-20 scroll-smooth">
			<div className="container md:px-4 mx-auto">
				<div className="max-w-2xl mx-auto mb-16 text-center">
					<span className="font-bold tracking-wider uppercase dark:text-violet-400">
						Pricing
					</span>
					<h2 className="text-4xl font-bold lg:text-5xl">
						Services We Provide
					</h2>
				</div>
				<div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-16 my-2 md:my-5 -mx-4 mt-16 ">
					{serviceData.map((service: any) => (
						<div key={service._id} className="col-span-1 p-6 space-y-6 rounded shadow sm:p-8 bg-yellow-200 hover:bg-[rgb(167,139,250)] hover:shadow-2xl">
							<div className="space-y-2">
								<h4 className="text-2xl font-bold">{service.title}</h4>
								<span className="text-6xl font-bold">{service.price}</span>
							</div>
							<p className="mt-3 leading-relaxed dark:text-gray-400">
								{service.detail}
							</p>

							<Link to={service.price==="Free"?`/free` : `/book/${service._id}`}>
								<button
									type="button"
									className="inline-block px-5 py-3 mt-3 font-semibold tracking-wider text-center rounded bg-white hover:bg-[#1f2937] hover:text-[#a78bfa]">
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
