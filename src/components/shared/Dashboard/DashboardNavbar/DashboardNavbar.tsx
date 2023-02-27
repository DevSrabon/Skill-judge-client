import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/Logo/icons8-productivity-64.png";
import { useState } from "react";
import { useAuth } from "../../../../contexts/AuthProvider";

const DashboardNavbar = ({ setOpenSideBar, openSideBar }: any) => {
    const [openProfile, setOpenProfile] = useState(false);
    const { user, signOutUser }: any = useAuth();
    const navigate = useNavigate()
    	const handleLogout = () => {
				signOutUser()
                    .then(() => {
                        navigate("/")
                    })
					.catch((err) => {
						console.log(err);
					});
			};
    console.log(user);
    let alText = "profile user";
    return (
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start">
							<button
								onClick={() => setOpenSideBar(!openSideBar)}
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
								<span className="sr-only">Open sidebar</span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
								</svg>
							</button>
							<Link to="/" className="flex ml-2 md:mr-24">
								<img src={Logo} className="h-8 mr-3" alt="FlowBite Logo" />
							</Link>
						</div>
						<div className="flex items-center">
							<div className="flex items-center ml-3">
								<div>
									<button
										type="button"
										onClick={() => setOpenProfile(!openProfile)}
										className="flex relative text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
										aria-expanded="false"
										data-dropdown-toggle="dropdown-user">
										<span className="sr-only">Open user menu</span>
										<img
											className="w-8 h-8 rounded-full"
											src={user?.photoURL}
											alt={alText}
										/>
									</button>
									{openProfile && (
										<div
											className="z-50 top-10 right-5 absolute my-4 text-base list-none bg-white dark:bg-gray-600 divide-y divide-gray-100 rounded shadow-lg"
											id="dropdown-user">
											<div className="px-4 py-3" role="none">
												<p
													className="text-sm text-gray-900 dark:text-white"
													role="none">
													{user?.displayName}
												</p>
												<p
													className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
													role="none">
													{user?.email}
												</p>
											</div>
											<ul className="py-1" role="none">
												<li>
													<Link
														to="/dashboard"
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
														role="menuitem">
														Dashboard
													</Link>
												</li>
												<li>
													<Link
														to="/"
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
														role="menuitem">
														Back To Home
													</Link>
												</li>

												<li
													onClick={handleLogout}
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
													role="menuitem">
													Sign out
												</li>
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
};

export default DashboardNavbar;
