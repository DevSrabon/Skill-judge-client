import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
		<footer className="p-10 bg-black dark:bg-gray-900 dark:text-gray-100 text-white min-w-full mx-0">
			<div className="footer lg:place-items-center">
				<div>
					<span className="footer-title">Services</span>
					<Link to={""} className="link link-hover">
						Branding
					</Link>
					<Link to={""} className="link link-hover">
						Design
					</Link>
					<Link to={""} className="link link-hover">
						Marketing
					</Link>
					<Link to={""} className="link link-hover">
						Advertisement
					</Link>
				</div>
				<div>
					<span className="footer-title">Company</span>
					<Link to={""} className="link link-hover">
						About us
					</Link>
					<Link to={""} className="link link-hover">
						Contact
					</Link>
					<Link to={""} className="link link-hover">
						Jobs
					</Link>
				</div>
				<div>
					<span className="footer-title">Legal</span>
					<Link to={""} className="link link-hover">
						Terms of use
					</Link>
					<Link to={""} className="link link-hover">
						Privacy policy
					</Link>
					<Link to={""} className="link link-hover">
						Cookie policy
					</Link>
				</div>
			</div>
			<div className="mt-8">
				<p className="text-center">
					Copyright © 2023 - All right reserved by Skill-Judge
				</p>
			</div>
		</footer>
	);
};

export default Footer;