import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../contexts/UserProvider";
import { FaUserFriends } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";

const Dashboard = () => {
  const {dbUser}:any = useUser()
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
						{dbUser?.role === "admin" ? (
							<>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-800 focus:text-white"
										to={"/dashboard/all-users"}>
										<FaUserFriends />
										All Users
									</Link>
								</li>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
										to={"/dashboard/paiduser"}>
                      <FaUserTie/>
										Paid User
									</Link>
								</li>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
                    to={"/dashboard/quiz"}>
                    <MdQuiz/>
										All Quiz
									</Link>
								</li>
								<li className="border rounded-md">
									<Link
										className="bg-emerald-500 focus:bg-black focus:text-white"
                    to={"/dashboard/allsubmission"}>
                    <BsFillCursorFill/>
										All Submission
									</Link>
								</li>
							</>
						) : (
							<></>
						)}
					</ul>
				</div>
			</div>
		);
}

export default Dashboard;