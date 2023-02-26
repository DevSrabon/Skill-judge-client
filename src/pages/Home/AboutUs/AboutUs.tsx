import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./AboutUs.css";
import Spinner from "../../../SharedComponent/Spinner/Spinner";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const AboutUs = () => {
	const [active, setActive] = React.useState({});
	console.log("🚀 ~ file: AboutUs.tsx:16 ~ AboutUs ~ active:", active)

	const { data = [], isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/team`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<section className="team-section">
			<div className="image-layer"></div>
			<div className="relative">
				<div className={"dots"}>
					<span></span>
				</div>
				<h2 className=" text-center text-4xl md:text-6xl dark:text-white font-extrabold mb-3">
					Meet With Our <br className="mt-2" /> Team Members
				</h2>
				<div className=" hidden md:block md:absolute md:right-[77px] lg:right-[304px]">
					<img
						src="https://t.commonsupport.com/driveto/images/resource/title-pattern-1.svg"
						alt=""
						className="w-44 md:w-64"
					/>
				</div>
			</div>
			<div className="container rounded-lg">
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5,
						slideShadows: false,
					}}
					pagination={{ el: ".swiper-pagination", clickable: true }}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
						// clickable: true,
					}}
					modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 1,
						},
						1024: {
							slidesPerView: 3,
						},
						1560: {
							slidesPerView: 3,
						},
					}}
					className="swiper-container">
					{data.map((team: any) => (
						<div key={team._id}>
							<SwiperSlide>
								<div className="grid items-center justify-center">
									<img
										// onMouseEnter={() => setActive(false)}
										// onMouseLeave={() => setActive(true)}
										src={team.img}
										alt={team.name}
										className="h-72 md:h-96 w-96  shadow-lg text-center bg-white"
										loading="lazy"
									/>
									<div className="-mt-[60px] px-2 py-2 bg-white w-[80%] mx-auto rounded-lg shadow-lg">
										<div
											onMouseEnter={() =>
												setActive({ [team._id]: !active[team._id] })
											}>
											<h2 className="text-center text-sm md:text-xl font-bold text-pink-800 py-2">
												{team.name}
											</h2>
											<h2 className="font-semibold text-center text-sm md:text-lg  text-info">
												{team.role}
											</h2>
										</div>
										<div
											onMouseLeave={() =>
												setActive({ [team._id]: active[team._id] })
											}
											className={` ${
												active[team._id] ? "block" : "hidden"
											}  flex justify-center gap-5 text-2xl pt-3 text-info`}>
											<a href={team.linkedin}>
												<AiFillLinkedin className="hover:text-pink-800 hover:text-3xl hover:-mt-2 transition-all duration-300 ease-in-out" />
											</a>
											<a href={team.github}>
												<AiFillGithub className="hover:text-pink-800 hover:text-3xl hover:-mt-2 transition-all duration-300 ease-in-out" />
											</a>
											<a href={team.facebook}>
												<AiFillFacebook className="hover:text-pink-800 hover:text-3xl hover:-mt-2 transition-all duration-300 ease-in-out" />
											</a>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</div>
					))}

					<div className="slider-controler">
						<div className="swiper-button-prev slider-arrow">
							<FaArrowLeft />
						</div>
						<div className="swiper-button-next slider-arrow">
							<FaArrowRight />
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</Swiper>
			</div>
		</section>
	);
};

export default AboutUs;
