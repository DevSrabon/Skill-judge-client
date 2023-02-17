import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {

    return (
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<Outlet />
				</div>
				<div className="drawer-side">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
					<ul className="menu gap-y-2 font-bold p-4 w-80">

								<li className="border rounded-md gap-2">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
										to={"/userDashboard/quiz"}>
										Quiz
									</Link>
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
										to={"/userDashboard/singlesubmission"}>
										Submission
									</Link>
								</li>
						
					</ul>
				</div>
			</div>
		);
};

export default UserDashboard;