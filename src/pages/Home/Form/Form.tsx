import { useQuery } from "@tanstack/react-query";
import { FiArrowDown } from "react-icons/fi";
import PrimaryButton from "../../../components/shared/PrimaryButton/PrimaryButton";

const Form = () => {

	const {data: users} = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/team`);
			const data = await res.json();
			return data;
		}
	}) 
	console.log(users)

	return (
		<div>
			<div className="flex flex-row lg:flex-row justify-center">
				<FiArrowDown className="text-4xl lg:text-8xl" />
			</div>
			<section className="lg:flex justify-center">
				<div className="lg:w-3/6 hero-section">
					<div className="relative">
						<div className={"dots"}>
							<span></span>
						</div>
						<h2 className=" text-center text-4xl md:text-6xl dark:text-white font-extrabold ">
							Connect with
							<br className="mt-2" /> Skill Judge Team
						</h2>
						<div className=" hidden md:block md:absolute md:right-[77px] lg:right-[-36px]">
							<img
								src="https://t.commonsupport.com/driveto/images/resource/title-pattern-1.svg"
								alt=""
								className="w-44 md:w-64"
							/>
						</div>
					</div>
					{/* <h1 className="text-5xl font-bold font-sans leading-[4.2rem]"><span className="">Connect with <br/> Skill Judge Team</span></h1> */}
					<p className="my-12 font-sans text-xl dark:text-white">
						Connect with an expert who can help you find the <br /> right
						solution for your team.
					</p>
					<div className="grid grid-cols-3 items-center">
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="48px"
								height="48px">
								<path
									fill="#0081fb"
									d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"
								/>
								<linearGradient
									id="wSMw7pqi7WIWHewz2_TZXa"
									x1="42.304"
									x2="13.533"
									y1="24.75"
									y2="24.75"
									gradientUnits="userSpaceOnUse">
									<stop offset="0" stop-color="#0081fb" />
									<stop offset=".995" stop-color="#0064e1" />
								</linearGradient>
								<path
									fill="url(#wSMw7pqi7WIWHewz2_TZXa)"
									d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"
								/>
								<linearGradient
									id="wSMw7pqi7WIWHewz2_TZXb"
									x1="7.635"
									x2="7.635"
									y1="32.87"
									y2="13.012"
									gradientUnits="userSpaceOnUse">
									<stop offset="0" stop-color="#0081fb" />
									<stop offset=".995" stop-color="#0064e1" />
								</linearGradient>
								<path
									fill="url(#wSMw7pqi7WIWHewz2_TZXb)"
									d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"
								/>
								<path
									d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z"
									opacity=".05"
								/>
								<path
									d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z"
									opacity=".07"
								/>
							</svg>
							<span className="text-3xl font-semibold font-sans dark:text-white">
								Meta
							</span>
						</div>
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="48px"
								height="48px">
								<path
									fill="#ff5722"
									d="M6 6H22V22H6z"
									transform="rotate(-180 14 14)"
								/>
								<path
									fill="#4caf50"
									d="M26 6H42V22H26z"
									transform="rotate(-180 34 14)"
								/>
								<path
									fill="#ffc107"
									d="M26 26H42V42H26z"
									transform="rotate(-180 34 34)"
								/>
								<path
									fill="#03a9f4"
									d="M6 26H22V42H6z"
									transform="rotate(-180 14 34)"
								/>
							</svg>
							<span className="text-3xl font-semibold font-sans dark:text-white">
								Microsoft
							</span>
						</div>
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="48px"
								height="48px">
								<circle cx="24" cy="24" r="20" fill="#2196f3" />
								<path
									fill="#fff"
									d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
								/>
								<polygon fill="#fff" points="37,31 31,27 31,21 37,17" />
							</svg>
							<span className="text-3xl font-semibold font-mono dark:text-white">
								Zoom
							</span>
						</div>
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 50"
								width="100px"
								height="100px">
								<path d="M 31.199219 18.900391 L 31.199219 28.699219 L 31.199219 30.699219 C 31.899219 30.799219 32.600781 30.800781 33.300781 30.800781 L 33.300781 30.783203 C 34.500638 30.825538 35.700534 30.873699 36.900391 31 L 36.900391 28.900391 C 35.931475 28.900391 34.563662 28.837154 33.300781 28.779297 L 33.300781 18.900391 L 31.199219 18.900391 z M 4.8007812 19 C 4.7007813 21.9 4.6992187 23.699219 4.6992188 26.699219 C 3.7992188 23.899219 2.9 21.999609 2 19.099609 L 0 19.099609 L 0 32.5 L 2.0996094 32.199219 L 2.0996094 24.900391 C 3.0996094 27.600391 3.6996094 29.300391 4.5996094 31.900391 C 5.3996094 31.800391 6.2003906 31.699609 6.9003906 31.599609 L 6.9003906 19 L 4.8007812 19 z M 8.9003906 19 L 8.9003906 31.400391 C 9.5672135 31.30513 10.233568 31.213894 10.900391 31.205078 L 10.900391 31.300781 C 12.100391 31.200781 13.499219 31.1 14.699219 31 L 14.699219 28.900391 C 13.531262 28.99772 12.178075 29.003028 11 29.1875 L 11 29.099609 L 11 26 L 13.800781 26 L 13.800781 23.900391 L 11 23.900391 L 11 21.099609 L 14.699219 21.099609 L 14.699219 19 L 11 19 L 10.900391 19 L 8.9003906 19 z M 16.099609 19 L 16.099609 21.099609 L 18.300781 21.099609 L 18.300781 30.800781 C 19.000781 30.700781 19.700391 30.699219 20.400391 30.699219 L 20.400391 21.099609 L 22.599609 21.099609 L 22.599609 19 L 16.099609 19 z M 23.900391 19 L 23.900391 30.699219 L 24.599609 30.699219 L 26 30.699219 L 26 25.900391 L 28.900391 25.900391 L 28.900391 23.800781 L 26 23.800781 L 26 21.099609 L 29.800781 21.099609 L 29.800781 19 L 26 19 L 23.900391 19 z M 42.5 19 C 42.87465 19.936624 43.950657 22.674944 44.994141 25.345703 C 43.880786 27.913046 42.726085 30.55488 42.300781 31.5 C 43.000781 31.6 43.8 31.700781 44.5 31.800781 C 44.650681 31.409012 45.447942 29.564592 46.066406 28.123047 C 46.680227 29.706874 47.442406 31.659441 47.599609 32.099609 C 48.299609 32.199609 49.3 32.300391 50 32.400391 C 49.525393 31.187507 48.436118 28.371836 47.257812 25.333984 C 48.395151 22.705387 49.574535 19.992751 50 19 L 47.699219 19 C 47.550501 19.386665 46.777916 21.17538 46.183594 22.5625 C 45.700657 21.31592 44.933714 19.345625 44.800781 19 L 42.5 19 z M 38.599609 19.099609 L 38.599609 31.199219 C 39.299609 31.299219 39.999219 31.300391 40.699219 31.400391 L 40.699219 19.099609 L 38.599609 19.099609 z" />
							</svg>
						</div>
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="48px"
								height="48px">
								<path
									fill="#536dfe"
									d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
								/>
							</svg>
							<span className="text-3xl font-semibold font-sans dark:text-white">
								Discord
							</span>
						</div>
						<div className="flex items-center">
							<img
								src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/null/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-green-tal-revivo.png"
								alt="netlify"
							/>
							<span className="text-3xl font-semibold font-sans dark:text-white">
								Netlify
							</span>
						</div>
					</div>
				</div>
				<div className="lg:w-3/6">
					<form className="px-20 py-16 flex flex-col gap-y-10">
						<div>
							<label
								htmlFor="email"
								className="text-lg text-start font-sans dark:text-white">
								PROFESSIONAL EMAIL
							</label>
							<input
								type="email"
								placeholder="example@gmail.com"
								className="w-full input-bordered  input  border-b-2 py-4 focus:outline-none focus:border-emerald-400 placeholder:font-sans placeholder:text-lg"
							/>
						</div>
						<div>
							<label
								htmlFor="job"
								className="text-lg text-start dark:text-white">
								JOB TITLE
							</label>
							<input
								type="text"
								placeholder="Title"
								className="w-full input-bordered  input border-b-2 placeholder:text-start py-4 focus:outline-none focus:border-emerald-400 placeholder:font-sans placeholder:text-lg"
							/>
						</div>
						<div>
							<label
								htmlFor="role"
								className="text-lg font-sans dark:text-white">
								ROLE
							</label>
							<select
								name=""
								id=""
								className="w-full select select-bordered focus:outline-none focus:border-emerald-400 placeholder:font-sans placeholder:text-lg dark:text-black">
								<option value="Select...">Select...</option>
								<option value="Talent Acqusation/Recruting">
									Talent Acqusation/Recruting
								</option>
								<option value="Engneering Leading">Engneering Leading</option>
								<option value="Student Entern">Student Entern</option>
							</select>
						</div>
						<div>
							<PrimaryButton>Submit</PrimaryButton>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Form;
