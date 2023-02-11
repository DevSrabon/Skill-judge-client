import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Banner = () => {
	return (
		<div
			className="md:flex flex-row-reverse justify-around items-center background-image p-10}"
			style={{
				backgroundImage: `url("https://i.ibb.co/cX0MFNx/banner-bg.jpg")`,
				backgroundRepeat: "no-repeat",
				
				height: "100%",
			}}>
			<div className="text-center content py-10">
				<h2 className="text-orange-400 font-semibold text-4xl">
					A New Way to Learn
				</h2>
				<p className="text-white pt-10 text-center">
					Skill Judge is the best platform to help you enhance your skills,
					expand <br /> your knowledge and prepare for technical interviews.
				</p>
				<button className="border-2 border-yellow-600 mt-3 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
					Create an account
				</button>
			</div>
			<div className="content">
				<Player
					autoplay
					loop
					src="https://assets3.lottiefiles.com/packages/lf20_ne6kcqfz.json"></Player>
			</div>
		</div>
	);
};

export default Banner;