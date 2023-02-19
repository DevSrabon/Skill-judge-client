import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="p-10 bg-black dark:bg-gray-900 dark:text-gray-100 text-white min-w-full mx-0  text-center">
			<div className='text-center'>
				<Link to={"/about-us"} className="link link-hover">
					About Us <br />
				</Link>
				<Link to={"/contact-us"} className="link link-hover">
					Contact Us <br />
				</Link>
				<Link to={"terms-of-use"} className="link link-hover">
					Terms of Use
				</Link>
			</div>
			<div className="mt-8">
				<p className="text-center">
					Copyright &copy; All rights reserved by Skill-Judge
				</p>
			</div>
		</footer>
	);
};

export default Footer;