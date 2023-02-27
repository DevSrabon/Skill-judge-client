import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import './UserReviews.css';

const UserReviews = () => {
    const [reviews, setReviews]: any = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
			<div className="hero-section">
				<div className="relative">
					<div className={"dots"}>
						<span></span>
					</div>
					<h2 className=" text-center text-4xl md:text-6xl dark:text-white font-extrabold ">
						Check what <br className="mt-2" /> people say about.
					</h2>
					<div className=" hidden md:block md:absolute md:right-[77px] lg:right-[366px]">
						<img
							src="https://t.commonsupport.com/driveto/images/resource/title-pattern-1.svg"
							alt=""
							className="w-44 md:w-64"
						/>
					</div>
				</div>
				{/* <h1 className="text-4xl font-bold text-center dark:text-white">
					Check what <br />
					people say about.
				</h1> */}
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[EffectCoverflow, Pagination, Autoplay]}
					className="mySwiper">
					{reviews.map((review) => (
						<SwiperSlide key={review._id} className="dark:text-white">
							<div className="card card-compact bg-base-100 shadow-xl">
								<figure>
									<img src={review.picture} alt="Shoes" />
								</figure>
								<div className="card-body dark:text-white dark:bg-stone-900">
									<h2 className="card-title">{review.name}</h2>
									<p>{review.review}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		);
};

export default UserReviews;