import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import './AboutUs.css'
import Spinner from "../../SharedComponent/Spinner/Spinner";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const AboutUs = () => {
	const [active, setActive] = React.useState<boolean>(true);

	const {
		data = [],
		isLoading,
		isFetching,
	} = useQuery({
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
	if (isFetching) {
		return <Spinner />;
	}
	return (
		<div>
			<div>
				<h2 className="text-center text-4xl md:text-6xl dark:text-white font-extrabold mb-5">
					Meet With Our <br className="mt-2" /> Team Members
				</h2>
			</div>
			<div className="container">
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
										onMouseEnter={() => setActive(false)}
										onMouseLeave={() => setActive(true)}
										src={team.img}
										alt={team.name}
										className="h-72 md:h-96 w-96  shadow-lg text-center bg-white"
										loading="lazy"
									/>
									<div
										onMouseEnter={() => setActive(false)}
										onMouseLeave={() => setActive(true)}
										className="-mt-[60px] px-2 py-2 bg-white w-[80%] mx-auto rounded shadow-lg">
										<h2 className="text-center text-sm md:text-xl font-bold text-pink-800 py-2">
											{team.name}
										</h2>
										<h2 className="font-semibold text-center text-sm md:text-lg  text-info">
											{team.role}
										</h2>
										<div
											className={` ${
												active ? "hidden" : "block"
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
		</div>
	);
};

export default AboutUs;
