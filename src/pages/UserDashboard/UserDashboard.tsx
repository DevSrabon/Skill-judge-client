import { Link, Outlet } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";

const UserDashboard = () => {
	return (
		<div className="drawer drawer-mobile">
			<input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<Outlet />
			</div>
			<div className="drawer-side relative">
				<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
				<ul className="menu gap-y-2 font-bold p-4 w-80">
					<li className="border rounded-md gap-2">
						<Link
							className="bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-800 focus:text-white"
							to={"/userDashboard"}>
							<MdQuiz />
							Quiz Marks
						</Link>
						<Link
							className="bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-800 focus:text-white"
							to={"/userDashboard/singlesubmission"}>
							<BsFillCursorFill />
							Submission
						</Link>
					</li>
				</ul>
				<label htmlFor="dashboard-drawer">
					<div className="fixed md:hidden right-10 bottom-40 bg-slate-400 p-3 text-white rounded-full text-2xl ">
						<BiFilterAlt />
					</div>
				</label>
			</div>
		</div>
	);
};

export default UserDashboard;
