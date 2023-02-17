import { Link, Outlet } from 'react-router-dom';
import { MdQuiz } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";

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
								className="bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-800 focus:text-white"
								to={"/userDashboard/quiz"}>
								<MdQuiz />
								Quiz Marks
							</Link>
							<Link
								className="bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-800 focus:text-white"
								to={"/userDashboard/singlesubmission"}>
                                    <BsFillCursorFill/>
								Submission
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
};

export default UserDashboard;