import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Spinner from '../../SharedComponent/Spinner/Spinner';
const AboutUs = () => {
      const { data = [], isLoading, isFetching } = useQuery({
				queryKey: ["user"],
				queryFn: async () => {
					const res = await fetch(`${process.env.REACT_APP_API_URL}/team`);
					const data = await res.json();
					return data;
				},
      });
    if (isLoading) {
        return <Spinner/>
    }
    if (isFetching) {
        return <Spinner/>
    }
    return (
			<div className="px-5 grid justify-center md:px-20 py-10 dark:bg-black bg-[#f8fafc]">
				<h3 className="text-xl text-center text-black dark:text-gray-400 font-bold">
					Meet with
				</h3>
				<h1 className="text-4xl text-center font-bold text-pink-800">
					Our Team Member
				</h1>
				<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 md:mt-8">
					{" "}
					{data.map((team: any) => (
						<div className=" w-full md:w-72 p-4 rounded-xl shadow-2xl bg-white dark:bg-gray-800 dark:text-gray-100">
							<img
								src={team.img}
								alt={team.name}
								className="h-80 rounded-xl w-full shadow-sm "
							/>
							<h2 className="text-center text-xl font-bold text-pink-800 py-2">
								{team.name}
							</h2>
							<h2 className="font-semibold text-center text-lg  text-info">
								{team.role}
							</h2>
							<div className="flex justify-center gap-5 text-2xl pt-5 text-info">
								<a href={team.linkedin}>
									<AiFillLinkedin className="hover:text-pink-800 hover:text-3xl hover:-mt-2" />
								</a>
								<a href={team.github}>
									<AiFillGithub className="hover:text-pink-800 hover:text-3xl hover:-mt-2" />
								</a>
								<a href={team.facebook}>
									<AiFillFacebook className="hover:text-pink-800 hover:text-3xl hover:-mt-2 transition-all duration-300 ease-in-out" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		);
};

export default AboutUs;